'use strict';
module.exports = (sequelize, DataTypes) => {
  var Portal = sequelize.define('Portal', {
    name: DataTypes.STRING,
    top: DataTypes.INTEGER,
    left: DataTypes.INTEGER,
    width: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    transitionSpeed: DataTypes.INTEGER,
    customCSS: DataTypes.JSON
  }, {});
  Portal.associate = function(models) {
    // associations can be defined here
    Portal.belongsTo(models.Display);
    Portal.belongsTo(models.TransitionType);
    Portal.belongsTo(models.PortalType);
    Portal.belongsTo(models.Feed);
  };
  return Portal;
};