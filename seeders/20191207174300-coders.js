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
          img:"https://media.licdn.com/dms/image/C4E03AQG5zFWYLQBAgA/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=-Wm5ZwHN_Q7oAwRSKAWsmUyinzNrho6pRQRrlvw0Nzo",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Andrew Kim",
          expertise: "Javascript",
          userId: null,
          img:"https://media.licdn.com/dms/image/C5603AQH5M46x7IsHbA/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=DiuOfqQNn2HkTemi9xPKhdEr0wHD5Ln3A7d6MInal5E",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jeremy Rose",
          expertise: "Express",
          userId: null,
          img:"https://media.licdn.com/dms/image/C4D03AQFZHbMkjIjFaA/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=2xw9kpOH8O4D_SiN5y5tepLABfw8nd7bLlQcDftMG5s",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Melissa Donegan",
          expertise: "CSS",
          userId: null,
          img:"https://media.licdn.com/dms/image/C4D03AQGZWNO62BOZxA/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=pHUih38S03_BgqZzlqbE5slg1A8n4zjd4fgswUUlN88",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "M.K Irvine",
          expertise: "Fullstack",
          userId: null,
          img:"https://media.licdn.com/dms/image/C4E03AQEaX2s_vclSOA/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=Fkr-ib97MJpqoqXFNSU7i0VujTf7AqySScxiT-AeU4k",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Chris Abrams",
          expertise: "Javascript",
          userId: null,
          img:"https://media.licdn.com/dms/image/C5603AQFUbP14kzE_ag/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=LIp8cSQLxTba95z1dpDua3DyPxwL45wXXJV1rUedd1Y",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Nyesha Viechweg",
          expertise: "UX/CSS",
          userId: null,
          img:"https://media.licdn.com/dms/image/C4E03AQFT8fQbhFLw7Q/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=lxeE1BDrWeloqW6t0bslJ6v1UgdiK042lAjiH9Mtqnw",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jordan Cruz-Correa",
          expertise: "Fullstack",
          userId: null,
          img:"https://media.licdn.com/dms/image/C4D03AQGsYiLy7BxHhA/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=Udqi85cHn2HXBunJv881w96EBDE4EYpXQzBi8PxuBPE",
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
          img:"https://media.licdn.com/dms/image/C4D03AQE8tAaBY7Q3_A/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=onC60_t31ztAYYd_iMItlJjp04b82yXqJV7FC7RXmFo",
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
