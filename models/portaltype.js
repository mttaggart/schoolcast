'use strict';
module.exports = (sequelize, DataTypes) => {
  var PortalType = sequelize.define('PortalType', {
    name: DataTypes.STRING
  }, {});
  PortalType.associate = function(models) {
    // associations can be defined here
    models.PortalType.hasMany(models.Portal);
  };
  return PortalType;
};