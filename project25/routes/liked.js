const express = require('express');
const Router = express.Router();
const controller = require('../services/addController');
const likedController = new controller();
const Adds = require('../models/addsDB')
class liked{
    constructor(){
        Router.get('/',this.liked);
        Router.put('/AddToLiked');
    }
    async liked(req, res){
        res.render('liked.html')
    }
    async AddToLiked(req, res) {
        let title = req.body.title;
        let description = req.body['description'];
        let image = req.body['image'];
        let onTopDate = req.body['onTopDate'];
        const add = new liked({
            title: title,//req.body.title
            description: description,//req.body.description
            image: image,//req.body.image
            ontop: false,
            onTopDate:onTopDate
        })
        add.save({}, function (err, allAdds) {
            if (err) return console.log(err);
        })
        Adds.find({}, function (err, allAdds) {
            console.log('Ready!');
            res.render('allAds.html', { allAdds });
        })
    }
}   


new liked();
module.exports = Router;