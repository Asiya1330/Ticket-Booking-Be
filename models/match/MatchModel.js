const BaseModel = require("../BaseModel");
const db = require("../../config.js/db");

class MatchModel extends BaseModel {
  constructor(model = db.Match) {
    super(model);
  }
}

module.exports = MatchModel;
