const user = require('../models/addsDB');

class AdminController{
    constructor(){
        this.user = [{
            name:'admin',
            email:'admin@example.com',
            password:'admin'
        }]
    }
    async fname(req, res){
        console.log(Users)
        res.render('admin.html',Users)
    }
    async addTestUser(req, res) {
        const user = new User({name: "Vasya", email: "vasya@example.com",password: "examplepassword"});
        user.save({model:'users'},function(err) {
            if (err) {
                return console.log(err)
            }
            console.log(user)
            res.send("Записан тестовый пользователь")
        })
    }
}
new AdminController();
module.exports = AdminController;
 