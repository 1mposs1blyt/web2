const express = require('express');
const Router = express.Router();
const controller = require('../services/BlogController');
const BlogController = new controller();
const { usr } = require('../routes/blog');
const  users  = require('../models/userdb');




class BlogPage {
    constructor() {
        Router.get('/test/addUser',this.addTestUser)
        Router.get('/test/updateUser',this.updateUser)
        Router.get('/myblog', this.GetMyBlogs)
        Router.get('/', this.getAllBblogs)
        Router.get('/user/:login', this.getuserdata)
        Router.get('/:id', this.getBlogs);
        Router.get('/users', this.getUsers)
        Router.get('/:id', this.addTest)
    }
    async getAllBblogs(req, res) {
        let items = [{
            namepage: "Blog1",
            title: "Blog1",
            description: "Bloasdaasdg"
        }, {
            namepage: "Blog2",
            title: "Blog2",
            description: "Bloasdaasdg"
        }, {
            namepage: "Blog3",
            title: "Blog3",
            description: "Bloasdaasdg"
        }]
        res.render('index.html', { items });
    }
    async getuserdata(req, res) {
        let a = [req.params.login]
        console.log(req.params.login)
        res.render('userinfo.html', a)
    }
    async getBlogs(req, res) {
        res.send(`Получено блог по id ${req.params.id}
        <h1><a href="/">Back!</a></h1>`);
    }
    // не работает вывод информации пользователя, я нехнаю тоткуда их взять
    // async Blog(req, res) {
    //     res.send()
    // }
    async getUsers(req, res) {
        BlogController.getUsers(req, res)
    }
    async addTest(req, res) {
        BlogController.addTestUser(req, res)
    }
    async crtUser() {

    }
    async GetMyBlogs(req, res) {
        res.send(`
        <h1>hello <a href="/">Back!</a></h1>\
        `)
    }
    async addTestUser(req, res){
        // let user = new User({name:"asdsad",age:"99"});
        // user.find
        const user = new users({
            name: "Bill",
            age: 41
        });
        user.save(function(err){
            if(err){
                return console.log(err);
            }
            res.send(`Записан текстовый пользоввткель ${user}`)
        })

        
    }
    async updateUser(req, res) {
        
        users.updateOne({name:"Bill"}, { age:'99' } ,function(err) {
            if(err) { console.log(err); }
            console.log(`done!,${users.user}`);
            res.send(`Переписан текстовый пользоввткель ${users.user}`)
        });
    }
}

new BlogPage();
module.exports = Router;