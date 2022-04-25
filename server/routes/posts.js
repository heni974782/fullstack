const express = require('express')
const router = express.Router()
const {Posts} = require('../models') // we get the Posts object from the models folder 



router.get('/', (req, res) => {
    res.send("message take 1")
});

router.post('/', async (req, res) => {
    const postBody = req.body;
    await Posts.create(postBody);
    res.json(Posts);
});


module.exports = router