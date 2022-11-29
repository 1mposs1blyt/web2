const express = require('express');
const Router = express.Router();
const controller = require('../services/authController');
const authController = new controller();


class auth{
    constructor(){
        Router.get('/',this.auth)
        Router.post('/user',this.postAuth,)
    }
    async auth(req, res){
        res.render('auth.html');
    }
    async postAuth(req, res){
        res.render('aunt_.html',req.body);
        // console.log(a);
    }
}

new auth();
module.exports = Router;