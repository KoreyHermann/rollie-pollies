const { Poll } = require('../models');

const polldata = [
  {
    question: 'Which super power would you rather have?',
    answer1: 'Super Speed',
    answer2: 'Super Strength',
    list_id: 1,
  },
  {
    question: 'If it came down to it, would you rather experience a zombie apocalpse or alien invasion?',
    answer1: 'Aliens',
    answer2: 'Zombies',
    list_id: 1,
  },
  {
    question: 'cats or dogs?',
    answer1: 'cat',
    answer2: 'dog',
    list_id: 1,
  },
];

const seedPolls = () => Poll.bulkCreate(polldata);

module.exports = seedPolls;
