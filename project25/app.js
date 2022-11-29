const express = require('express');
const njk = require('nunjucks')
const mongoose = require('mongoose');
const port = 3000;
const app = express();
const admin = require('./routes/admin');
const adds = require('./routes/adds');
const profile = require('./routes/profile');
const liked  = require('./routes/liked')


njk.configure("templates", {
    autoescape: true,
    express: app
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/admin',admin);
app.use('/adds',adds);
app.use('/profile',profile);
app.use('/liked',liked);


app.get('/', (req, res) => {
    res.send(`Heello, world!`);
})

mongoose.connect("mongodb://127.0.0.1:27017/userdb", { useUnifiedTopology: true }, function (err) {
    if (!err) {
        app.listen(port, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log(`listening on http://localhost:${port}`);
            }
        });
    } else {
        console.log(err)
    }
})