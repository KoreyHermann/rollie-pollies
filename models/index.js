const User = require('./User');
const poll = require('./poll');
const list = require('./list');

list.hasMany(poll, {
    foreignKey: 'gallery_id',
  });
  
  poll.belongsTo(list, {
    foreignKey: 'gallery_id',
  });

module.exports = { User, list, poll };