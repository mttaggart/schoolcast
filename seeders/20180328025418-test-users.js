'use strict';

const models = require("../models");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return models.User.bulkCreate([{
      firstName: "Joe",
      lastName: "testUser",
      email: "joe@testdomain.com",
      password: "mypassword",
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Schoolcast",
      lastName: "Admin",
      email: "admin@testdomain.com",
      password: "adminpassword",
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }],
    {
      logging: console.log,
      hooks: true,
      individualHooks: true
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete("Users",{});
  }
};
