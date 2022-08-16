const express = require('express')
const router = express.Router()
const {Comments} = require('../models') // we get the Posts object from the models folder 

// get all the comments by the postID   
router.get('/:postId' , async (req, res) => {
    const postId = req.params.postId;
    const comments = await Comments.findAll({ where : { PostId: postId }}); // get the comments associated to a specific postId
    res.json(comments); // send back the response a Json 
})

router.post('/', async (req, res) => {
    const comment = req.body;
    await Comments.create(comment);
    res.json(comment);
});


module.exports = router