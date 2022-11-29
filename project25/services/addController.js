const adds = require('../models/addsDB')

class addsController{
    constructor(){
        this.add = [{
            title: '',
            text:''
        }]
    }
    async fname(req, res){
        res.render('index.html')
    }
}

new addsController();
module.exports = addsController;