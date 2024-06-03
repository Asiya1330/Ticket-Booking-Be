const BaseRoute = require('../BaseRoute');
const UserController = require('../../controllers/user/UserController');
const UserModel = require('../../models/user/UserModel');

class UserRoutes extends BaseRoute {
    constructor() {
        super(UserController, UserModel); 
    }

    initRoutes() {
        this.router.get("/", this.controller.getAll.bind(this.controller));
        this.router.get("/:id", this.controller.getById.bind(this.controller));
        this.router.put("/:id", this.controller.update.bind(this.controller));
        this.router.delete("/:id", this.controller.delete.bind(this.controller));
        this.router.post('/signup', this.controller.signup.bind(this.controller));
        this.router.post('/login', this.controller.login.bind(this.controller));
    }
}

module.exports = new UserRoutes().router;
