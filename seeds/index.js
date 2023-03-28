const sequelize = require('../config/connection');
const seedList = require('./listData');
const seedPoll = require('./pollData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedList();

  await seedPoll();

  process.exit(0);
};

seedAll();