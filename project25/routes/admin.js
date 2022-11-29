const express = require('express');
const Router = express.Router();
const controller = require('../services/adminController');
const adminController = new controller();

class admin{
    constructor(){
        Router.get('/',this.admin)
    }
    async admin(req, res){
        res.render('admin.html')
    }
}

new admin();
module.exports = Router;    