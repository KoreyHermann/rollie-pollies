const sequelize = require('../config/connection');
const seedList = require('./listData');
const seedPolls = require('./pollData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedList();

  await seedPolls();

  process.exit(0);
};

seedAll();