'use strict';
module.exports = (sequelize, DataTypes) => {
  var Feed = sequelize.define('Feed', {
    name: DataTypes.STRING,
    description: DataTypes.STRING(1024)
  }, {});
  Feed.associate = function(models) {
    // associations can be defined here
    Feed.hasMany(models.Item);
  };
  return Feed;
};