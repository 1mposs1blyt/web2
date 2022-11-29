const express = require('express');
const Router = express.Router();
const controller = require('../services/addController');
const CreateController = new controller();
const Adds = require('../models/addsDB')

class Create{
    constructor(){
        Router.get('/',this.create);
        Router.post('/');
    }
    async create(req, res){
        Adds.find({}, function(err, allAdds) {
            if (err) {
                console.log(err);
                return res.sendStatus(400);
            }
            // console.log(allAdds)
            res.render('create.html',{allAdds})
        })
        // res.render('create.html',)
    }
}   


new Create();
module.exports = Router;