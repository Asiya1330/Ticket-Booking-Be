const BaseModel = require("../BaseModel");
const db = require("../../config.js/db");

class TeamMemberModel extends BaseModel {
  constructor(model = db.TeamMember) {
    super(model);
  }
}

module.exports = TeamMemberModel;
