const router = require("express").Router();
const models = require("../models");
const verifyToken = require("./verifyToken");

function getAndSendPortals(res) {
  models.Portal.findAll({
    where: {},
    include: [models.TransitionType, models.PortalType, models.Display, models.Feed]
  })
  .then( portals => {
    res.status(200).send(portals);
  })
  .catch( err => {
    console.log(err);
    res.status(500).send("No portals available");
  });
}

router.use("/api/portals*", verifyToken);

router.route("/api/portals")
.get((req, res) => {
  getAndSendPortals(res);
})
.post((req, res) => {
  const data = req.body;
  models.Portal.create(data)
  .then( p => {
    getAndSendPortals(res);
  })
  .catch ( err => {
    res.status(500).send("Could not create portal");
  });
});

router.route("/api/portals/:id")
.get((req, res) => {
  models.Portal.findOne({
    where:{id:req.params.id},
    include: [models.TransitionType, models.PortalType]
  })
  .then( p => {
    res.status(201).send(p);
  })
  .catch( err => {
    console.log(err);
    res.status(500).send("No portals available");
  });
})
.put((req, res) => {
  const data = req.body;
  models.Portal.update(data,{where: {id: req.params.id}})
  .then( rows => {
    getAndSendPortals(res);
  })
  .catch( err => {
    res.status(500).send("Could not update");
  });
})
.delete((req, res) => {
  const id = req.params.id;
  models.Portal.destroy({where: {id}})
  .then ( rows => {
    getAndSendPortals(res);
  })
  .catch( err => {
    res.status(500).send("Could not delete Portal");
  })
});

module.exports = router;