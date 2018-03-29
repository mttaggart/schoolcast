const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const models = require("./models");
const app = express();
const router = express.Router();

app.set("port", (process.env.PORT || 3002));

//Set up static routes
router.use(express.static(__dirname + "/public"));

// Set up JSON middleware
router.use(bodyParser.json());

router.route("/")
.get((req, res) => {
  res.sendFile(path.resolve(__dirname,"public","index.html"));
});

// USERS

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
    res.status(201).send(`${user.lastName}, ${user.firstName} created`);
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
  models.User.update(userData,{where: {id: req.params.id}})
  .then( rows => {
    res.status(201).send(rows);
  })
  .catch( err => {
    res.status(500).send("Could not update");
  });
})
.delete((req, res) => {
  const userId = req.params.id;
  models.User.destroy({where: {id: userId}})
  .then ( rows => {
    res.status(200).send("User deleted");
  })
  .catch( err => {
    res.status(500).send("Could not delete user");
  })
});

app.use(router);

app.listen(app.get("port"), function() {
  console.log("Broadcasting on " + app.get("port"));
});
