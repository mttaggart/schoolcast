'use strict';
module.exports = (sequelize, DataTypes) => {
  var Display = sequelize.define('Display', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    customCSS: DataTypes.JSON
  }, {});
  Display.associate = function(models) {
    // associations can be defined here
  };
  return Display;
};