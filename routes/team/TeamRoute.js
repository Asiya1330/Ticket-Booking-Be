const BaseRoute = require('../BaseRoute');
const TeamController = require('../../controllers/team/TeamController');
const TeamModel = require('../../models/team/TeamModel');

class TeamRoutes extends BaseRoute {
    constructor() {
        super(TeamController, TeamModel); 
    }
}

module.exports = new TeamRoutes().router;
