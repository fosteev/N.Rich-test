const BaseModel = require('./BaseModel');

const users = [{
    name: 'Test',
    password: '123456789'
}, {
    name: 'user',
    password: '12345'
}]

class UsersModel extends BaseModel {
    findByName(name) {
        return users.find(u => u.name === name);
    }
}

module.exports = UsersModel;
