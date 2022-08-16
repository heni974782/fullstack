const express = require('express');
//const { default: Post } = require('../../client/app/src/pages/Post');
const router = express.Router()
const {Posts} = require('../models') // we get the Posts object from the models folder 


// this route get  all the posts from the data base
router.get('/', async (req, res) => {
    const allPosts = await Posts.findAll(); // findAll : query all the table 
    res.json(allPosts);
});

// this function get the data from the DB based on the id of the post 
router.get('/byId/:id' , async (req, res) => {
    const id = req.params.id;
    const post = await Posts.findByPk(id); // we use findbyPK to fetch the post with a specific ID 
    res.json(post);
})

// this route post the forms filled from the front end in the DB 
router.post('/', async (req, res) => {
    const postBody = req.body;
    await Posts.create(postBody);
    res.json(Posts);
});

// this route update the title of the post 
router.put('/title', async(req, res) => {
    const {newTitle , id } = req.body 
    await Posts.update({title : newTitle} , { where : { id :  id }}) 
    res.json(newTitle)
})



// delete route 
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