const express = require('express');
const app = express();
const port = 3000;
const middleware = require('./middleware')
const path = require('path')
const bodyParser = require("body-parser")
const mongoose = require("./database");
const session = require("express-session");


const server= app.listen(port, {} == console.log("server listning on port" + port));

app.set("view engine","pug");
app.set("views","views");

app.use(bodyParser.urlencoded({ extended:false}));
app.use(express.static(path.join(__dirname,"public")));

app.use(session({
    secret: "anything",
    resave: true,
    saveUninitialized: false
}))

//Routes
const loginRoute = require('./routes/loginRoutes');
const registerRoute = require('./routes/registerRoutes');

const logoutRoute = require('./routes/logout');

//Api routes
const postApiRoute= require('./routes/api/posts');

const { Console } = require('console');

app.use("/login",loginRoute);
app.use("/register",registerRoute);

app.use("/api/posts",postApiRoute);

app.use("/logout",logoutRoute);

app.get("/" ,middleware.requireLogin, (req,res,next) =>{

    var payload ={
        pageTitle:"Home",
        userLoggedIn: req.session.user
    }


    res.status(200).render("home",payload);
})