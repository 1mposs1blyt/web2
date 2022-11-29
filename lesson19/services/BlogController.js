const User = require('../models/userdb')

class BlogController {
    constructor() {
        this.blogs = [{
            title: '',
            text: "",
            description: "",
            date: "",
            name: ""
        }]
    }
    blogs2 = [{
        title: "Все блоги",
        text: "Тут будут выводиться все блоги",
        date: '1.2.2022',
        name: "ghaechka"
    }]
    async allBlogs(req, res) {
        res.render('index.html', this.blogs2)
    }
    async getBlogs(req, res) {
        res.send("Блог получен по id", req.params.id)
    }
    async getusers(req, res) {
        User.find({},function(err, allUsers){
            if (err) {
                console.log(err);
                return res.status(400)
            }
            res.status(allUsers)
        })
    }
    async addTestUser(req, res){

        const user = new User({name:"asdsad",age:"99"});
        user.find
        user.save(function(err){
            if(err){
                return console.log(err);
            }
            res.send("Записан текстовый пользоввткель")
        })

    }
    
}


new BlogController();
module.exports = BlogController;