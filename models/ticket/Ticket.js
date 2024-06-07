module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define('ticket', {
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
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        stadium: {
            type: DataTypes.STRING,
            allowNull: false
        },
        currency: {
            type: DataTypes.STRING,
            defaultValue: '$',
            allowNull: false
        },
        instock: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        },
    },{
        timestamps: true
    });
    return Ticket;
};
