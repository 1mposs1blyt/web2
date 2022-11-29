const express = require('express');
const njk = require('nunjucks')
const mongoose = require('mongoose')
const port = 3000;
const app = express();
// const homepage = require('./routes/homepage')
const blogpage = require('./routes/blog')
const userpage = require('./routes/user')
const loginpage = require('./routes/login')
const authpage = require('./routes/auth')


njk.configure("templates", {
    autoescape: true,
    express: app
})
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/blog', blogpage)
// app.use('/blog/:id', blogpage)
// app.use('blog/user', blogpage)
app.use('/', userpage)
app.use('/login', loginpage)
app.use('/auth', authpage)
// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'text/plain')
//     res.write('you posted:\n')
//     res.end(JSON.stringify(req.body, null, 2))
// })

app.get('/', (req, res) => {
    res.send(`
   <h1><a href="/blog">Blogs</a></h1>
   <h1><a href="/login">login</a></h1>
   <h1><a href="/user">user</a></h1>
   <h1><a href="/blog/myblog">myblog</a></h1>

   <h1><a href="/blog/user/usernaaame">user info</a></h1>
   `);
    //    <form method="post" action="/blog/user/">
    //     <input type="text" name='username' placeholder='usrname'>
    //    </form>
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
