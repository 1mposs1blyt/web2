const express = require('express');
const Router = express.Router();
const controller = require('../services/addController');
const CreateController = new controller();

class Create{
    constructor(){
        Router.get('/',this.create);
        Router.post('/');
    }
    async create(req, res){
        res.render('create.html')
    }
}   


new Create();
module.exports = Router;