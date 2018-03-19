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
    models.Portal.belongsTo(models.Display);
    models.Portal.belongsTo(models.TransitionType);
    models.Portal.belongsTo(models.PortalType);
  };
  return Portal;
};