const router = require("express").Router();
const models = require("../models");

function getAndSendDisplays(res) {
  models.Display.findAll({
    where: {},
    include: [
      {
        model: models.Portal,
        include: [models.PortalType]
      }
    ]
  })
  .then( displays => {
    res.status(200).send(displays);
  })
  .catch( err => {
    console.log(err);
    res.status(500).send("No displays available");
  });
}

router.route("/api/displays")
.get((req, res) => {
  getAndSendDisplays(res)
})
.post((req, res) => {
  const data = req.body;
  models.Display.create(data)
  .then( d => {
    getAndSendDisplays(res);
  })
  .catch ( err => {
    res.status(500).send("Could not create display");
  });
});

router.route("/api/displays/:id")
.get((req, res) => {
  models.Display.findOne({
    where:{id:req.params.id}
  })
  .then( d => {
    res.status(201).send(d);
  })
  .catch( err => {
    console.log(err);
    res.status(500).send("No displays available");
  });
})
.put((req, res) => {
  const data = req.body;
  models.Display.update(data,{where: {id: req.params.id}})
  .then( rows => {
    getAndSendDisplays(res);
  })
  .catch( err => {
    res.status(500).send("Could not update");
  });
})
.delete((req, res) => {
  const id = req.params.id;
  models.Display.destroy({where: {id}})
  .then ( rows => {
    getAndSendDisplays(res);
  })
  .catch( err => {
    res.status(500).send("Could not delete Display");
  })
});

// Route to get associated portals
router.route("/api/displays/:id/portals")
.get((req, res) => {
  const DisplayId = req.params.id;
  models.Portal.findAll({
    where: {DisplayId}
  })
  .then( portals => {
    res.status(200).send(portals);
  })
  .catch( err => {
    res.status(500).send("Could not find associated portals");
  });
})

module.exports = router;