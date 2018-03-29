'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable("Portals",{
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      top: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      left: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      width: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      height: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      transitionSpeed: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 300
      },
      customCSS: Sequelize.JSON,
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable("Portals",{cascade:true})
  }
};
