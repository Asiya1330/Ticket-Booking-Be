module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        fname:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        lname:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.ENUM('admin', 'employee', 'standard'),
            defaultValue: 'standard',
            allowNull: false
        }
    },{
        timestamps: true
    });
    return User;
};
