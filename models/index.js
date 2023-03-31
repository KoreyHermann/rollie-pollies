const User = require('./user');
const List = require('./list');
const Poll = require('./poll');

List.hasMany(Poll, {
  foreignKey: 'list_id',
});
Poll.belongsTo(List, {
  foreignKey: 'list_id',
});
module.exports = { User, List, Poll };