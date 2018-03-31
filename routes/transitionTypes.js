const router = require("express").Router();
const models = require("../models");
const verifyToken = require("./verifyToken");

router.use("/api/displays*", verifyToken);

router.route("/api/transitiontypes")
.get((req, res) => {
  models.TransitionType.findAll()
  .then( transitionTypes => {
    res.status(200).send(transitionTypes);
  })
  .catch( err => {
    console.log(err);
    res.status(500).send("No transitionTypes available");
  });
})
.post((req, res) => {
  const data = req.body;
  models.TransitionType.create(data)
  .then( tt => {
    res.status(201).send(`transitionType ${tt.name} created`);
  })
  .catch ( err => {
    res.status(500).send("Could not create transitionType");
  });
});

router.route("/api/transitiontypes/:id")
.get((req, res) => {
  models.TransitionType.findOne({
    where:{id:req.params.id}
  })
  .then( tt => {
    res.status(201).send(tt);
  })
  .catch( err => {
    console.log(err);
    res.status(500).send("No transitionTypes available");
  });
})
.put((req, res) => {
  const data = req.body;
  models.TransitionType.update(data,{where: {id: req.params.id}})
  .then( rows => {
    res.status(201).send(rows);
  })
  .catch( err => {
    res.status(500).send("Could not update");
  });
})
.delete((req, res) => {
  const id = req.params.id;
  models.TransitionType.destroy({where: {id}})
  .then ( rows => {
    res.status(200).send("Transition Type deleted");
  })
  .catch( err => {
    res.status(500).send("Could not delete Transition Type");
  })
});

module.exports = router;