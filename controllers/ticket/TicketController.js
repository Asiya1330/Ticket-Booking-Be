const BaseController = require("../BaseController");
const TicketModel = require("../../models/ticket/TicketModel");

class TicketController extends BaseController {
  constructor(ModelClass) {
    super(ModelClass);
  }

}

module.exports = TicketController;
