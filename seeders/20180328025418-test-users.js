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
    return queryInterface.bulkInsert('Users', [{
      firstName: "Joe",
      lastName: "testUser",
      email: "joe@testdomain.com",
      password: "mypassword",
      isAdmin: false
    },
    {
      firstName: "Schoolcast",
      lastName: "Admin",
      email: "admin@testdomain.com",
      password: "adminpassword",
      isAdmin: true
    }],{
      logging: (sql) => {console.log(sql)},
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
