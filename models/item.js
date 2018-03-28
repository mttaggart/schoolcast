'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    content: DataTypes.Text
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
    models.Item.belongsTo(models.Feed);
  };
  return Item;
};