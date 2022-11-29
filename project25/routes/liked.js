const express = require('express');
const Router = express.Router();
const controller = require('../services/addController');
const likedController = new controller();

class liked{
    constructor(){
        Router.get('/',this.liked);
        Router.post('/');
    }
    async liked(req, res){
        res.render('liked.html')
    }
}   


new liked();
module.exports = Router;