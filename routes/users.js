const router = require("express").Router();
const models = require("../models");
const verifyToken = require("./verifyToken");

router.use("/api/users*",verifyToken);

router.route("/api/users")
.get((req, res) => {
  models.User.findAll()
  .then( users => {
    res.status(200).send(users);
  })
  .catch( err => {
    console.log(err);
    res.status(500).send("No users available");
  });
})
.post((req, res) => {
  const userData = req.body;
  models.User.create(userData)
  .then( user => {
    res.status(201).send(user);
  })
  .catch ( err => {
    res.status(500).send("Could not create user");
  });
});

router.route("/api/users/:id")
.get((req, res) => {
  models.User.findOne({
    where:{id:req.params.id}
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
    return models.User.findAll()
    .then( users => {
      return res.status(200).send(users);
    })
  })
  .catch( err => {
    res.status(500).send("Could not update");
  });
})
.delete((req, res) => {
  const userId = req.params.id;
  models.User.destroy({where: {id: userId}})
  .then ( rows => {
    return models.User.findAll()
    .then( users => {
      return res.status(200).send(users);
    })
    .catch( err => {
      console.log(err);
      res.status(500).send("No users available");
    });
  })
  .catch( err => {
    res.status(500).send("Could not delete user");
  })
});

module.exports = router;