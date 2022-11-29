const adds = require('../models/addsDB')

class Admin{
    constructor(){
        this.anecdot = [{
            title: '',
            text:''
        }]
    }
    async fname(req, res){
        res.render('admin.html')
    }
}

new Admin();
module.exports = Admin;