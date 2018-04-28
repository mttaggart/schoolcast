'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
    Item.belongsTo(models.Feed);
  };
  return Item;
};