const User = require('./User');
const Team = require('./Team');
const UserTeam = require('./UserTeam')
User.belongsToMany(Team, {
    through: UserTeam,
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Team.belongsToMany(User, {
    through: UserTeam,
    foreignKey: 'team_id'
});

module.exports = { User, Team, UserTeam };