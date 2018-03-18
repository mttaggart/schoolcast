const Sequelize = require("sequelize");
const path = require("path");
const dataPath = path.normalize(__dirname + "/../data/schoolcast.db");
const sequelize = new Sequelize("sqlite:" + dataPath);
const bcrypt = require("bcrypt");

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

/*
HOOKS
*/

// User
User.beforeCreate((user, options) => {
  return encryptPassword(user.password)
  .then(success => {
      user.password = success;
  })
  .catch( err => {
      if (err) console.log(err);
  })
});

function encryptPassword(password) {
  return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (err, hash) => {
          if (err) return reject(err);
          return resolve(hash);
      });
  });
}


module.exports = {
    TransistionType,
    PortalType,
    Feed,
    Item,
    Display,
    Portal,
    User
}