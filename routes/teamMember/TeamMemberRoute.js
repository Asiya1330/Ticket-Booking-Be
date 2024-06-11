const BaseRoute = require('../BaseRoute');
const TeamMemberController = require('../../controllers/teamMember/TeamMemberController');
const TeamMemberModel = require('../../models/teamMember/TeamMemberModel');

class TeamMemberRoutes extends BaseRoute {
    constructor() {
        super(TeamMemberController, TeamMemberModel); 
    }
}

module.exports = new TeamMemberRoutes().router;
