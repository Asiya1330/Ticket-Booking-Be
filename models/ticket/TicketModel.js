const BaseModel = require("../BaseModel");
const db = require("../../config.js/db");

class TicketModel extends BaseModel {
  constructor(model = db.Ticket) {
    super(model);
  }
}

module.exports = TicketModel;
