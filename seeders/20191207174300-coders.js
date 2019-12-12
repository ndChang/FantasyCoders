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
          userId: null,
          img:null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hadeeqa Saman",
          expertise: "Javascript",
          userId: null,
          img:null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jowel Rosario",
          expertise: "Javascript",
          userId: null,
          img:null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jeanmax Deslouches",
          expertise: "CSS",
          userId: null,
          img:null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "James White",
          expertise: "SQL",
          userId: null,
          img:null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Frenchy French",
          expertise: "Javascript",
          userId: null,
          img:null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Winston White",
          expertise: "Python",
          userId: null,
          img:null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ipsita Rao",
          expertise: "CSS",
          userId: null,
          img:null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Rakshyak Kc",
          expertise: "Javascript",
          userId: null,
          img:null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Philip Ryan",
          expertise: "React",
          userId: null,
          img:null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Thomas Kang",
          expertise: "CSS",
          userId: null,
          img:null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Roma Patel",
          expertise: "UX/HTML",
          userId: null,
          img:null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Andrew Kim",
          expertise: "Javascript",
          userId: null,
          img:null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jeremy Rose",
          expertise: "Express",
          userId: null,
          img:null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Melissa Donegan",
          expertise: "CSS",
          userId: null,
          img:null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "M.K Irvine",
          expertise: "Fullstack",
          userId: null,
          img:null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Chris Abrams",
          expertise: "Javascript",
          userId: null,
          img:null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nyesha Viechweg",
          expertise: "UX/CSS",
          userId: null,
          img:null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jordan Cruz-Correa",
          expertise: "Fullstack",
          userId: null,
          img:null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Yevgeniy Drikman",
          expertise: "Javascript",
          userId: null,
          img:null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Mick Roth",
          expertise: "Fullstack",
          userId: null,
          img:null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Marilyn Shi",
          expertise: "UX/CSS",
          userId: null,
          img:null,
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
