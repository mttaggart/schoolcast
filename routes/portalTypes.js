const router = require("express").Router();
const models = require("../models");
const verifyToken = require("./verifyToken");

function getAndSendPortalTypes(res) {
  models.PortalType.findAll()
  .then( portalTypes => {
    res.status(200).send(portalTypes);
  })
  .catch( err => {
    console.log(err);
    res.status(500).send("No portalTypes available");
  });
}

router.use("/api/portaltypes*", verifyToken);

router.route("/api/portaltypes")
.get((req, res) => {
  getAndSendPortalTypes(res);
})
.post((req, res) => {
  const data = req.body;
  models.PortalType.create(data)
  .then( pt => {
    getAndSendPortalTypes(res);
  })
  .catch ( err => {
    res.status(500).send("Could not create portalType");
  });
});

router.route("/api/portaltypes/:id")
.get((req, res) => {
  models.PortalType.findOne({
    where:{id:req.params.id}
  })
  .then( pt => {
    res.status(201).send(pt);
  })
  .catch( err => {
    console.log(err);
    res.status(500).send("No portalTypes available");
  });
})
.put((req, res) => {
  const data = req.body;
  models.PortalType.update(data,{where: {id: req.params.id}})
  .then( rows => {
    getAndSendPortalTypes(res);
  })
  .catch( err => {
    res.status(500).send("Could not update");
  });
})
.delete((req, res) => {
  const id = req.params.id;
  models.PortalType.destroy({where: {id}})
  .then ( rows => {
    getAndSendPortalTypes(res);
  })
  .catch( err => {
    res.status(500).send("Could not delete Portal Type");
  })
});

module.exports = router;