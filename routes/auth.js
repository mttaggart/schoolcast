const router = require("express").Router();
const models = require("../models");
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET || "supersecret";

router.route("/api/auth/login")
.post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = models.User.findOne({
    where: {email}
  })
  .then( user => {
    user.authenticate(password)
    .then (authenticated => {
      if (authenticated) {
        const token = jwt.sign({id: user.id},secret, {
          expiresIn: 86400
        });
        return res.status(200).send({authenticated: true, token, user});
      }
      res.status(401).send({authenticated: false, token: null});
    });
  })
  .catch( err => {
    res.status(500).send("No such user");
  });
});

router.route("/api/auth/logout")
.get((req, res) => {
  res.status(200).send({authenticated: false, token: null})
});

module.exports = router;