const Sequelize = require("sequelize");
const sequelize = new Sequelize("sqlite:../data/schoolcast.db");

sequelize.authenticate()
.then(() => {
  console.log("Connection to database established");
});

const TransistionType = sequelize.import("./TransitionType");
const PortalType = sequelize.import("./PortalType");
const Feed = sequelize.import("./Feed");
const Item = sequelize.import("./Item");
const Display = sequelize.import("./Display");
const Portal = sequelize.import("./Portal");
const User  = sequelize.import("./User");

// Define relationships
Item.belongsTo(Feed);
Display.hasMany(Portal);
Feed.hasMany(Portal);

export default {
    TransistionType,
    PortalType,
    Feed,
    Item,
    Display,
    Portal,
    User
}