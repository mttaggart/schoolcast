'use strict';

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
    return queryInterface.bulkInsert("TransitionTypes",[
      {
        id: 1,
        name: "Fade",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "SlideDown",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "SlideRight",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "SlideLeft",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "SlideUp",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete("TransitionTypes",{});
  }
};
