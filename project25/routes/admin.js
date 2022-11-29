const express = require('express');
const Router = express.Router();
const controller = require('../services/adminController');
const adminController = new controller();
const user = require('../models/addsDB');

class admin {
    constructor() {
        Router.get('/', this.userFind);
        Router.get('/new',this.admin)
    }
    
    async admin(req, res) {
        const User = new user({
            name: 'admin',
            email: "admin@gmail.com",
            password: 'admin'
        })
        User.save(function(err) {
            if (err) {
                return console.log(err)
            }
            console.log(user)
            res.send("Записан тестовый пользователь")
        })

    }
    async userFind(req,res){
        user.find({}, function(err, allUsers) {
            if (err) {
                console.log(err);
                return res.sendStatus(400);
            }
            console.log(allUsers)
            res.render('admin.html',{allUsers})
        })
    }
}

new admin();
module.exports = Router;    