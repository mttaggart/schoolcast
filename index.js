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

// PUBLIC ROUTE
app.use(routes.public);

// USERS
app.use(routes.users);

// PORTALTYPES
app.use(routes.portalTypes);

// TRANSITIONTYPES
app.use(routes.transitionTypes);

// DISPLAYS
app.use(routes.displays);

// FEEDS
app.use(routes.feeds);

// PORTALS
app.use(routes.portals);

// ITEMS
app.use(routes.items);


app.listen(app.get("port"), function() {
  console.log("Broadcasting on " + app.get("port"));
});
