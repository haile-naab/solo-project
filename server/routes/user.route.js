const UserController = require('./../controllers/user.controller');

const { authenticate } = require("../config/jwt.config");

module.exports = (app)=>{
    app.post('/api/user/register', UserController.register);
    app.post('/api/user/login', UserController.login);
    app.post('/api/user/logout', UserController.logout);
    
}