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
          img:"https://media.licdn.com/dms/image/C4D03AQFJ9vUHp_op1A/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=NBstVDpl85embaMmwBZiEsqcsw5_ZJMPnVkM-qLPlTM",
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
          img:"https://media.licdn.com/dms/image/C4D03AQHcQlwq8olguQ/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=cIA4pAZYVEsAi37T3uKSCQM7Uf369ttSXedfEDt8M9M",
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
          img:"https://media.licdn.com/dms/image/C4D03AQGOw00TkH01LQ/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=IJ1KMQVUhvzfSuUJxpsZ9OLY5mL9EO_25j6mymNHdI0",
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
