const express = require('express');
//const { default: Post } = require('../../client/app/src/pages/Post');
const router = express.Router()
const {Posts} = require('../models') // we get the Posts object from the models folder 


// this route get  all the posts from the data bae
router.get('/', async (req, res) => {
    const allPosts = await Posts.findAll();
    res.json(allPosts);
});

// this function get the data from the DB based on the id of the post 
router.get('/byId/:id' , async (req, res) => {
    const id = req.params.id;
    const post = await Posts.findByPk(id);
    res.json(post);
})

// this route post the forms filled from the front end in the DB 
router.post('/', async (req, res) => {
    const postBody = req.body;
    await Posts.create(postBody);
    res.json(Posts);
});

router.put('/title', async(req, res) => {
    const {newTitle , id } = req.body 
    await Posts.update({title : newTitle} , { where : { id :  id }}) 
    res.json(newTitle)
})




router.delete("/:postId", async(req, res) => {
    const postId = req.params.postId
    await Posts.destroy({
        where : {
            id : postId,   
        }
    })

    res.json("delete successful")
})



module.exports = router