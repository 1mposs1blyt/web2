const express = require('express');
const njk = require('nunjucks')
const mongoose = require('mongoose');
const port = 3000;
const app = express();  
const admin = require('./routes/admin');
const adds = require('./routes/adds');
const profile = require('./routes/profile');
const liked = require('./routes/liked')
const create = require('./routes/create')
// var env = new njk.Environment(AsyncLoaderFromDatabase, opts);


app.use(express.static('templates/static/'));

console.log(__dirname + '/static');

njk.configure("templates", {
    autoescape: true,
    express: app
});
// 
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// 
const redis = require('redis');
var cookieParser = require('cookie-parser')
var sessions = require('express-session');
const oneDay = 1000 * 60 * 60 * 24
let session = {};
const RedisStore = require('connect-redis')(sessions);
const client = redis.createClient();
/////////////////////////////
app.use(sessions({
    secret: 'aboba',      
    saveUninitialized: true,
    store: new RedisStore({
        host: 'localhost',
        port: 6379,
        client:client
    }),
    cookie: {                
        maxAge: oneDay     
    },                      
    resave: false            
}))                               
app.use(cookieParser());
app.use((req, res, next) => {
    let unauth = ['/']
    console.log(req.url)
    if (!unauth.includes(req.url) && req.sessions.user) {
        next()
    } else if (unauth.includes(req.url)) {
        next()
    } else {
        res.send('Вы не авторизованы')
    }
})
/////////////////////////////
app.get('/', (req, res) => {
    res.send(`index.html`);
})

app.use('/admin/', admin);
app.use('/adds/', adds);
app.use('/profile/', profile);
app.use('/liked/', liked);
app.use('/create/', create);



app.get
mongoose.connect("mongodb://127.0.0.1:27017/projectdb", { useUnifiedTopology: true }, function (err) {
    if (!err) {
        client.connect();
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