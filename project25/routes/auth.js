const express = require('express');
const Router = express.Router();
const controller = require('../services/addController');
const authController = new controller();
class home{
    constructor(){
        Router.get('/check', this.isAuthenticated);
        Router.get('/',this.homepage)
    }
    async  homepage(req, res){
        let data = Mongoose();
        let auth = isAuth();
        res.render('index.html',{data,auth});
    }
    async isAuthenticated(req, res){
        let sessions = req.session;
        return sessions.username ? {auth:true}:{auth:false};
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