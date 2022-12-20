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
const auth = require('./routes/auth')
// var env = new njk.Environment(AsyncLoaderFromDatabase, opts);
var CookieParser = require('cookie-parser')


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
const session = require('express-session');
const redis = require('redis');
module.exports = session;
const connectRedis = require('connect-redis');
var bodyParser = require('body-parser');
const RedisStore = connectRedis(session)
const oneDay = 1000 * 60 * 60 * 24;
const redisClient = redis.createClient({
    legacyMode: true,
})

//////////////////////////////////////
app.use(session({
    secret: 'aboba',
    saveUninitialized: true,
    store: new RedisStore({
        host: '127.0.0.1',
        port: '6379',
        client: redisClient
    }),
    cookie: {
        maxAge: oneDay
    },
    resave: false,
}))
app.use(CookieParser())
// app.use(bodyParser());

// app.use((req, res, next) => {
//     let unauth = ['/']
//     console.log(req.url)
//     if (!unauth.includes(req.url) && req.session.user) {
//         next()
//     } else if (unauth.includes(req.url)) {
//         next()
//     } else {
//         res.send('Вы не авторизованы')
//     }
// })
app.get('/', (req, res) => {
    res.render('index.html');
})

app.use('/admin/', admin);
app.use('/adds/', adds);
app.use('/profile/', profile);
app.use('/liked/', liked);
app.use('/create/', create);




mongoose.connect("mongodb://127.0.0.1:27017/projectdb", { useUnifiedTopology: true }, function (err) {
    if (!err) {
        // await redisClient.on('connect', function (err) {
        //     console.log('Connected to redis successfully');
        // });
        //  redisClient.on('error', function (err) {
        //     console.log('Could not establish a connection with redis. ' + err);
        // });
        // // \
        // redisClient.on('connect', function (err) {
        //     console.log('Connected to redis successfully');
        // });
        redisClient.connect()
        app.listen(port, (err) => {
            if (err) {
                console.error(err);
            } else {

                // const projectdb = mongoose.find("usersdb");
                // const users = db.collection("users");
                // console.log(projectdb.users.find())
                console.log(`listening on http://127.0.0.1:${port}`);
            }
        });
    } else {
        console.log(err)
    }
})