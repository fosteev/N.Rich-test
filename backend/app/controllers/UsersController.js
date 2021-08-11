const BaseController = require('./BaseController');
const UsersService = require('../services/UsersService');

class UsersController extends BaseController {
    constructor() {
        super();

        this.usersService = new UsersService();
    }

    async authUser(req, res) {
        try {
            const login = req.body.login;
            const password = req.body.password;

            if (!(login && password)) {
                res.status(400);
                res.send('Missing parameter');
                return;
            }

            const user  = await this.usersService.getUserByLoginPassword(login.toLowerCase(), password)

            if (!user) {
                res.status(400);
                res.send('Invalid login or password');
            }

            res.json(user);
        } catch (e) {
            res.status(500);
            res.send(e.message);
        }

    }
}

module.exports = UsersController;
