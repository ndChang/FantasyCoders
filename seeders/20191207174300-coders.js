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
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hadeeqa Saman",
          expertise: "Javascript",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jowel Rosario",
          expertise: "Javascript",
          userId: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jeanmax Deslouches",
          expertise: "CSS",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "James White",
          expertise: "SQL",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Frenchy French",
          expertise: "Javascript",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Winston White",
          expertise: "Python",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ipsita Rao",
          expertise: "CSS",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Rakshyak Kc",
          expertise: "Javascript",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Philip Ryan",
          expertise: "React",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Thomas Kang",
          expertise: "CSS",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Roma Patel",
          expertise: "HTML",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Andrew Kim",
          expertise: "Javascript",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jeremy Rose",
          expertise: "Express",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Melissa Donegan",
          expertise: "CSS",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "M.K Irvine",
          expertise: "Fullstack",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Chris Abrams",
          expertise: "Javascript",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nyesha Viechweg",
          expertise: "CSS",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jordan Cruz-Correa",
          expertise: "Fullstack",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Yevgeniy Drikman",
          expertise: "Javascript",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Mick Roth",
          expertise: "Fullstack",
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
