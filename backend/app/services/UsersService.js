const BaseService = require('./BaseService');
const UsersModel = require('../models/UsersModel');

class UsersService extends BaseService {
    constructor() {
        super();

        this.usersModel = new UsersModel();
    }

    async getUserByLoginPassword(username, password) {
        const user = this.usersModel.findByName();

        if (!user) {
            return null;
        }

        if (user.password !== password) {
            return null;
        }

        return user;
    }
}

module.exports = UsersService;
