module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define('team', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    },{
        timestamps: true
    });
    return Team;
};
