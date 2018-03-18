'use strict';
module.exports = (sequelize, DataTypes) => {
  var Display = sequelize.define('Display', {
    name: DataTypes.STRING,
    description: DataTypes.STRING(1024),
    customCSS: DataTypes.JSON
  }, {});
  Display.associate = function(models) {
    // associations can be defined here
    models.Display.hasMany(models.Portal);
  };
  return Display;
};