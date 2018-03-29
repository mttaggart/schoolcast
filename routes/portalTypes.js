const router = require("express").Router();
const models = require("../models");

router.route("/api/portaltypes")
.get((req, res) => {
  models.PortalType.findAll()
  .then( portalTypes => {
    res.status(200).send(portalTypes);
  })
  .catch( err => {
    console.log(err);
    res.status(500).send("No portalTypes available");
  });
})
.post((req, res) => {
  const data = req.body;
  models.PortalType.create(data)
  .then( pt => {
    res.status(201).send(`portalType ${pt.name} created`);
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
    res.status(201).send(rows);
  })
  .catch( err => {
    res.status(500).send("Could not update");
  });
})
.delete((req, res) => {
  const id = req.params.id;
  models.PortalType.destroy({where: {id}})
  .then ( rows => {
    res.status(200).send("Portal Type deleted");
  })
  .catch( err => {
    res.status(500).send("Could not delete Portal Type");
  })
});

module.exports = router;