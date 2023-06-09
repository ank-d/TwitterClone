// const { Router } = require('express');
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const User = require('../../schemas/UserSchema');
const Post = require('../../schemas/PostSchema');

app.use(bodyParser.urlencoded({ extended:false}));

router.get("/" , (req,res,next) =>{

})

router.post("/" , async(req,res,next) =>{

    if(!req.body.content) {
        console.log("Content param not sent with request");
        return res.status(400);
    }
var postData = {
    content: req.body.content,
    postedBy: req.session.user
}

    Post.create (postData)
    .then( async newPost =>{
        newPost = await User.populate(newPost, {path: "postedBy"})
        res.status(201).send(newPost);
    })
    .catch((error) =>{
        console.log(error);
        res.sendStatus(400);

    })
    // res.status(200).send("it worked");
   
})

module.exports = router;