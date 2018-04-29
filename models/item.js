'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    content: DataTypes.TEXT,
    duration: DataTypes.INTEGER,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
    Item.belongsTo(models.Feed);
  };
  return Item;
};