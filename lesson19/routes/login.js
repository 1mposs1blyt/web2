const express = require('express');
const Router = express.Router();
const controller = require('../services/loginController');
const loginController = new controller();
class login{
    constructor(){
        Router.get('/',this.Login)
    }
    async Login(req, res){
        res.render('login.htm');
    }
    // async
}
new login();
module.exports = Router;