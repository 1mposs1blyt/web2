const express = require('express');
const Router = express.Router();
const controller = require('../services/userController');
const useercontroller = new controller();//
class user{
    constructor(){
        Router.get('/user',this.user)
    }
    async user(req, res){
        res.render('users.html',{
            username:"Alexandr",
            userLogin:'MyNickName'
        });
    }
    async addTestUser(req,res){
        const user = new User({name:"vasyaaaa",age:17})
        user.save(function(err){
            if (err){
                return console.error(err);
            }
            res.send("Пользователь записан")
        })
    }
}

new user();
module.exports = Router;