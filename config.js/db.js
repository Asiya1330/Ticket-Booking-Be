const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, '../../SQLite/TicketsBooking.sqlite3'),
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models and pass the sequelize instance and DataTypes
db.User = require('../models/user/User')(sequelize, DataTypes);
db.Ticket = require('../models/ticket/Ticket')(sequelize, DataTypes);
db.Match = require('../models/match/Match')(sequelize, DataTypes);
db.Team = require('../models/team/Team')(sequelize, DataTypes);
db.TeamMember = require('../models/teamMember/TeamMember')(sequelize, DataTypes);


module.exports = db;
