const express = require('express');
const njk = require('nunjucks')
const mongoose = require('mongoose');
const port = 3000;
const app = express();
const admin = require('./routes/admin');
const adds = require('./routes/adds');
const profile = require('./routes/profile');
const liked  = require('./routes/liked')
const create = require('./routes/create')
// var env = new njk.Environment(AsyncLoaderFromDatabase, opts);


app.use(express.static('templates/static/'));

console.log(__dirname + '/static');

njk.configure("templates", {
    autoescape: true,
    express: app
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/admin/',admin);
app.use('/adds/',adds);
app.use('/profile/',profile);
app.use('/liked/',liked);
app.use('/create/',create);


app.get('/', (req, res) => {
    res.render(`index.html`);
})

mongoose.connect("mongodb://127.0.0.1:27017/projectdb", { useUnifiedTopology: true }, function (err) {
    if (!err) {
        app.listen(port, (err) => {
            if (err) {
                console.error(err);
            } else {
                
                // const projectdb = mongoose.find("usersdb");
                // const users = db.collection("users");
                // console.log(projectdb.users.find())
                console.log(`listening on http://localhost:${port}`);
            }
        });
    } else {
        console.log(err)
    }
})