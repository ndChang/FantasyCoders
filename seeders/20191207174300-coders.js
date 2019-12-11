"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "Coders",
      [
        {
          name: "Andrew Chang",
          expertise: "Javascript",
          rosterId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hadeeqa Saman",
          expertise: "Javascript",
          rosterId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jowel Rosario",
          expertise: "Javascript",
          rosterId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkDelete("Coders", null, {});
  }
};
