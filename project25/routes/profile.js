const express = require('express');
const Router = express.Router();
const controller = require('../services/addController');
const ProfileController = new controller();
class Profile{
    constructor(){
        Router.get('/',this.profile);
        Router.post('/');
    }
    async profile(req, res){
        res.render('profile.html')
    }
}   
new Profile();
module.exports = Router;