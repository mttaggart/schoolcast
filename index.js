const express = require("express");
const path = require("path");
const models = require("./models");
const app = express();
const router = express.Router();

app.set("port", (process.env.PORT || 3002));

//Set up static routes
router.use(express.static(__dirname + "/public"));

router.route("/")
.get((req, res) => {
  res.sendFile(path.resolve(__dirname,"public","index.html"));
});

router.route("/api/users")
.get((req, res) => {
  models.User.findAll()
  .then(users => {
    users.forEach( user => {
      console.log(user);
    })
  })
  .catch( err => {
    console.log(err);
    res.status(500).send("No users available");
  });
});

router.route("/api/users/:id")
.get((req, res) => {
  models.User.findAll()
  .then(users => {
    users.forEach( user => {
      console.log(user);
    })
  })
  .catch( err => {
    console.log(err);
    res.status(500).send("No users available");
  });
});

app.use(router);

app.listen(app.get("port"), function() {
  console.log("Broadcasting on " + app.get("port"));
});
