const express = require('express');
const Router = express.Router();
const controller = require('../services/addController');
const authController = new controller();
const Adds = require('../models/addsDB');



class home{
    constructor(){
        Router.get('/check', this.isAuthenticated);
        Router.get('/',this.homepage);
        Router.post('/reg',this.authReg);
    }
    async homepage(req, res){
        // let data = Mongoose();
        // let auth = isAuth();
        res.render('index.html',);
    }
    async isAuthenticated(req, res){
        let sessions = req.session;
        res.render("auth.html");
        console.log(sessions.username ? {auth:true}:{auth:false})
        // return sessions.username ? {auth:true}:{auth:false};
    }
    async authReg(req,res){
        let email = req.body.email;
        let password = req.body.password;
        // let UsID = req.sessionID
        // MemoryStore.setItem('UserEmail',email);
        // MemoryStore.setItem('UserPassword',password);
        // MemoryStore.setItem('UserId',UsID);
        // console.log(MemoryStore)
        res.render("index.html",{email,password});
    }
    
}
new home()
module.exports = Router;    
// app.use((req, res, next) => {
//     let unauth = ['/']
//     console.log(req.url)
//     if (!unauth.includes(req.url) && req.session.user){
//         next()
//     } else if (unauth.includes(req.url)) {
//         next()
//     } else {
//         res.send('Вы не авторизованы')
//     }
// })