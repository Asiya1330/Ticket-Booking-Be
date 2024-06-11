module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define('ticket', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        matchId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'match',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        seatNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        purchaseDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        ticketHolderName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ticketHolderContact: {
            type: DataTypes.STRING,
            allowNull: true
        },
    },{
        timestamps: true
    });
    return Ticket;
};
