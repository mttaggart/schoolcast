const express = require("express");
const path = require("path");
const models = require("./models");
const app = express();
const router = express.Router();

app.set("port", (process.env.PORT || 3002));

//Set up static routes
router.use(express.static(__dirname + "/public"));

router.get("/", function(req, res){
  res.sendFile(path.resolve(__dirname,"public","index.html"));
});

app.listen(app.get("port"), function() {
  console.log("Broadcasting on " + app.get("port"));
});