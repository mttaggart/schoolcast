'use strict';
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, 
  {});

  User.beforeCreate((user, options) => {
    return bcrypt.hash(user.password, 10)
    .then( hash => {
      user.password = hash;
    });
  });

  User.prototype.authenticate = function(password) {
    return bcrypt.compare(password, this.password)
    .then( res => {
      return res;
    });
  }

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
