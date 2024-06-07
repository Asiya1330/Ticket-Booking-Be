const BaseRoute = require('../BaseRoute');
const TicketController = require('../../controllers/ticket/TicketController');
const TicketModel = require('../../models/ticket/TicketModel');

class TicketRoutes extends BaseRoute {
    constructor() {
        super(TicketController, TicketModel); 
    }
}

module.exports = new TicketRoutes().router;
