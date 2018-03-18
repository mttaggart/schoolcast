const express = require("express");
const path = require("path");
const Sequelize = require("sequelize");

const sequelize = new Sequelize("sqlite:data/schoolcast.db");

sequelize.authenticate()
  .then(() => {
    console.log("Connection to database established");
  })

const app = express();

app.set("port", (process.env.PORT || 3002));

//Set up static routes
app.use(express.static(__dirname + "/public"));

app.get("*", function(req, res){
  res.sendFile(path.resolve(__dirname,"public","index.html"));
});

app.listen(app.get("port"), function() {
  console.log("Broadcasting on " + app.get("port"));
});