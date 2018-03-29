const router = require("express").Router();

router.route("/")
.get((req, res) => {
  res.sendFile(path.resolve(__dirname,"../public","index.html"));
});

module.exports = router;