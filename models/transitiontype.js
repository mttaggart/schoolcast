'use strict';
module.exports = (sequelize, DataTypes) => {
  var TransitionType = sequelize.define('TransitionType', {
    name: DataTypes.STRING
  }, {});
  TransitionType.associate = function(models) {
    // associations can be defined here
  };
  return TransitionType;
};