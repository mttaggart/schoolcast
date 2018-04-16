const router = require("express").Router();
const models = require("../models");
const verifyToken = require("./verifyToken");

function getAndSendUsers(res) {
  models.User.findAll({
    attributes: {
      exclude: ["password"]
    }
  })
  .then( users => {
    res.status(200).send(users);
  })
  .catch( err => {
    console.log(err);
    res.status(500).send("No users available");
  });
}

router.use("/api/users*",verifyToken);

router.route("/api/users")
.get((req, res) => {
  getAndSendUsers(res);
})
.post((req, res) => {
  const userData = req.body;
  models.User.create(userData)
  .then( user => {
    getAndSendUsers(res);
  })
  .catch ( err => {
    res.status(500).send("Could not create user");
  });
});

router.route("/api/users/:id")
.get((req, res) => {
  models.User.findOne({
    where:{id:req.params.id},
    attributes: {
      exclude:["password"]
    }
  })
  .then( user => {
    res.status(201).send(user);
  })
  .catch( err => {
    console.log(err);
    res.status(500).send("No users available");
  });
})
.put((req, res) => {
  const userData = req.body;
  models.User.update(
    userData,
    {where: {id: req.params.id}, individualHooks: true}
  )
  .then( rows => {
    getAndSendUsers(res);
  })
  .catch( err => {
    res.status(500).send("Could not update");
  });
})
.delete((req, res) => {
  const userId = req.params.id;
  models.User.destroy({where: {id: userId}})
  .then ( rows => {
    getAndSendUsers(res);
  })
  .catch( err => {
    res.status(500).send("Could not delete user");
  })
});

module.exports = router;