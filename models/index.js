const User = require('./User');
const List = require('./List');
const Poll = require('./Poll');

List.hasMany(Poll, {
  foreignKey: 'list_id',
});
Poll.belongsTo(List, {
  foreignKey: 'list_id',
});
module.exports = { User, List, Poll };