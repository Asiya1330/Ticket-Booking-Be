const BaseRoute = require('../BaseRoute');
const MatchController = require('../../controllers/match/MatchController');
const MatchModel = require('../../models/match/MatchModel');

class MatchRoute extends BaseRoute {
    constructor() {
        super(MatchController, MatchModel); 
    }
}

module.exports = new MatchRoute().router;
