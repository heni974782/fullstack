const express = require("express")
const app = express()
const db = require("./models")
const cors = require("cors")

app.use(express.json()); // parse the Json
app.use(cors()); // middleware that link the API with the FrontEnd

const postRouter = require("./routes/posts")
app.use("/tweet", postRouter) // middleware to handle the routes 

const commentsRouter = require("./routes/comments")
app.use("/comments", commentsRouter) // middleware to handle the routes 



db.sequelize.sync().then( () => {
    app.listen(3001, () => {
        console.log("server is up an running on port 3001")
    })
})

