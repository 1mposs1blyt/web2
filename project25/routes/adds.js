const express = require('express');
const Router = express.Router();
const controller = require('../services/addController');
const addsController = new controller();
const Adds = require('../models/addsDB')

class adds {
    constructor() {
        Router.get('/', this.addFind);
        Router.delete('/delete', this.deleteAdd);
        Router.put('/new', this.newAdd);
        Router.put('/OnTop', this.OnTop);
        Router.put('/OnDown', this.downTop)
        // Router.get('/OnTop',this.OnTop)
        // Router.get('/new',this.newUser);
        // Router.get('/delete',this.deleteAdd);
        // Router.get('/update',this.updateAdd);
    }

    async deleteAdd(req, res) {
        let id = req.body.id
        Adds.deleteOne({ _id: id }, function (err, allAdds) {
            if (err) {
                console.log(err);
                return res.sendStatus(400);
            }
        })
        Adds.find({}, function (err, allAdds) {
            console.log('Ready!');
            // res.send({allAdds})
            res.render('allAds.html', { allAdds })
        })
    }
    async newAdd(req, res) {
        let title = req.body.title;
        let description = req.body['description'];
        let image = req.body['image'];
        let onTopDate = req.body['onTopDate'];
        const add = new Adds({
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
    async OnTop(req, res) {
        const id = req.body.id
        let date = Math.floor(Math.random() * 100 + 5)
        Adds.findOne({ _id: id }, function (err, add) {
            if (err) {
                console.log(err);
                return res.sendStatus(400);
            }
            if (add.onTopDate > 20) {
                console.log('ERROR Прошло слишком мало времени для поднятия объявления')
                // res.send('ERROR Прошло слишком мало времени для поднятия объявления')
            } else {
                Adds.updateOne({ _id: id }, { ontop: true,onTopDate:date}, function (err, allAdds) {
                    if (err) {
                        console.log(err);
                        return res.sendStatus(400);
                    }
                })
            }
        })
        Adds.find({}, function (err, allAdds) {
            if (err) {
                console.log(err);
                return res.sendStatus(400);
            }
            res.render('adds.html', { allAdds })
        })
    }
    async downTop(req, res){
        const id = req.body.id
        let down_date = Math.floor(Math.random() * 10)//сделать поолучение сегодняшней даты
        Adds.findOne({ _id: id }, function (err, add) {
            if (err) {
                console.log(err);
                return res.sendStatus(400);
            }
            Adds.updateOne({ _id: id }, { ontop: false,onTopDate:down_date}, function (err, allAdds) {
                if (err) {
                    console.log(err);
                    return res.sendStatus(400);
                }
            })
            Adds.find({}, function (err, allAdds) {
                if (err) {
                    console.log(err);
                    return res.sendStatus(400);
                }
                res.render('adds.html', { allAdds })
            })
        })
        
    }
    async addFind(req, res) {
        Adds.find().sort({onTopDate:1},function (err, allAdds) {
            res.render('adds.html', { allAdds })
        })
    }
}


new adds();
module.exports = Router;