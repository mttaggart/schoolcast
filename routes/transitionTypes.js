const router = require("express").Router();
const models = require("../models");
const verifyToken = require("./verifyToken");

function getAndSendTransitionTypes(res) {
  models.TransitionType.findAll()
  .then( transitionTypes => {
    res.status(200).send(transitionTypes);
  })
  .catch( err => {
    console.log(err);
    res.status(500).send("No transitionTypes available");
  });
}

router.use("/api/displays*", verifyToken);

router.route("/api/transitiontypes")
.get((req, res) => {
  getAndSendTransitionTypes(res);
})
.post((req, res) => {
  const data = req.body;
  models.TransitionType.create(data)
  .then( tt => {
    getAndSendTransitionTypes(res);
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
    getAndSendTransitionTypes(res);
  })
  .catch( err => {
    res.status(500).send("Could not update");
  });
})
.delete((req, res) => {
  const id = req.params.id;
  models.TransitionType.destroy({where: {id}})
  .then ( rows => {
    getAndSendTransitionTypes(res);
  })
  .catch( err => {
    res.status(500).send("Could not delete Transition Type");
  })
});

module.exports = router;