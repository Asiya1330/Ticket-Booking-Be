const BaseModel = require("../BaseModel");
const db = require("../../config.js/db");

class TeamModel extends BaseModel {
  constructor(model = db.Team) {
    super(model);
  }
}

module.exports = TeamModel;
