const BaseModel = require('../BaseModel');
const db = require('../../config.js/db')

class UserModel extends BaseModel {
    constructor(model = db.User){
        super(model)
    }
}

module.exports = UserModel;
