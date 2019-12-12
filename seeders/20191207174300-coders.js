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
          img: "https://media.licdn.com/dms/image/C4E03AQGvEl3EQi0akQ/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=LmD2u4ChIm545IV2X5xtdfG_hprAPD3r_uHDH0rjEYY",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hadeeqa Saman",
          expertise: "Javascript",
          userId: null,
          img:"https://media.licdn.com/dms/image/C5603AQHTNy3kmljYPQ/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=Fv090dBa3Z8dtoQ-Z9J9Rkq6f1WOfStmyVBSpasgXts",
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
          img:"https://media.licdn.com/dms/image/C4D03AQG0KtpIcA48Gw/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=8X1gcKXuY3DCIs_sXiXN96tcCMqmZzD1OxpwULsigps",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "James White",
          expertise: "SQL",
          userId: null,
          img: "https://media.licdn.com/dms/image/C4D03AQE-TdcwSkWvtg/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=qZaM14J76mGbBFeTYUR9wSQb9Is0SaqjimaHuJJ2gfk",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Frenchy French",
          expertise: "Javascript",
          userId: null,
          img:"https://media.licdn.com/dms/image/C4D03AQGtzoBGOjtt_A/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=TqWhHvh9u2R6zKH7OWZVgBy24pP2Yjxu1MZqbEozLHY",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Winston White",
          expertise: "Python",
          userId: null,
          img:"https://media.licdn.com/dms/image/C4D03AQHWtBlcZ4zMLw/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=WQj-sqjnIo7hCJPKArPP_111x5lOno4Mwa39pEvIEZ8",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ipsita Rao",
          expertise: "CSS",
          userId: null,
          img:"https://media.licdn.com/dms/image/C5603AQHadWc4tuW3jA/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=gPkMJFvrQUsUyXvgqjauOqOUQrZil1m28z9K9FMfotw",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Rakshyak Kc",
          expertise: "Javascript",
          userId: null,
          img:"https://media.licdn.com/dms/image/C4E03AQF2Ec3ssQ1-uA/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=4thdfavncstO9Uy7dO-Gsl1wKHpfs-FLdeiBFBjaMJc",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Philip Ryan",
          expertise: "React",
          userId: null,
          img:"https://media.licdn.com/dms/image/C4E03AQEfc6KOqqXi1A/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=l_tRos6ejn0qlJY6FRAhQODPVsWWv5g7CqeYQth1CSo",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Thomas Kang",
          expertise: "CSS",
          userId: null,
          img:"https://media.licdn.com/dms/image/C4E03AQFZEDaq004HkA/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=rnQghEL_UFFLHJuH94hLINjJcbe9WRZAX5ptqK9_5PY",
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
