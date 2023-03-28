const { List } = require('../models');

const listdata = [
  {
    username: 'RolliePollie',
  },
  {
    username: 'Mcfly',
  },
];

const seedLists = () => List.bulkCreate(listdata);

module.exports = seedLists;