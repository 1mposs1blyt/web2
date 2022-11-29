const express = require('express');
const Router = express.Router();
const controller = require('../services/addController');
const addsController = new controller();

class adds{
    constructor(){
        Router.get('/',this.adds);
        Router.post('/');
    }
    async adds(req, res){
        res.render('adds.html')
    }
}   


new adds();
module.exports = Router;