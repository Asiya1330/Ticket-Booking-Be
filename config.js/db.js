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

module.exports = db;
