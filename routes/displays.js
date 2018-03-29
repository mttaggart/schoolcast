const router = require("express").Router();
const models = require("../models");

router.route("/api/displays")
.get((req, res) => {
  models.Display.findAll()
  .then( displays => {
    res.status(200).send(displays);
  })
  .catch( err => {
    console.log(err);
    res.status(500).send("No displays available");
  });
})
.post((req, res) => {
  const data = req.body;
  models.Display.create(data)
  .then( d => {
    res.status(201).send(`display ${d.name} created`);
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
    res.status(201).send(rows);
  })
  .catch( err => {
    res.status(500).send("Could not update");
  });
})
.delete((req, res) => {
  const id = req.params.id;
  models.Display.destroy({where: {id}})
  .then ( rows => {
    res.status(200).send("Display deleted");
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