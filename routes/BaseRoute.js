const express = require("express");

class BaseRoute {
  constructor(UserController, UserModel) {
    this.router = express.Router();
    this.controller = new UserController(UserModel);
    this.initRoutes();
  }

  initRoutes() {
    this.router.get("/", this.controller.getAll.bind(this.controller));
    this.router.get("/:id", this.controller.getById.bind(this.controller));
    this.router.post("/", this.controller.create.bind(this.controller));
    this.router.put("/:id", this.controller.update.bind(this.controller));
    this.router.delete("/:id", this.controller.delete.bind(this.controller));
  }
}

module.exports = BaseRoute;
