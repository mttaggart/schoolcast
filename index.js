const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();

app.set("port", (process.env.PORT || 3002));

//Set up static routes
app.use(express.static(__dirname + "/public"));

// Set up JSON middleware
app.use(bodyParser.json());

// router.route("/")
// .get((req, res) => {
//   res.sendFile(path.resolve(__dirname,"public","index.html"));
// });

// USERS
app.use(routes.users);


app.listen(app.get("port"), function() {
  console.log("Broadcasting on " + app.get("port"));
});
