const express = require("express")
const app = express()
const db = require("./models")
const cors = require("cors")

app.use(express.json());
app.use(cors());

const postRouter = require("./routes/posts")
app.use("/tweet", postRouter) // middleware to handle the routes 



db.sequelize.sync().then( () => {
    app.listen(3001, () => {
        console.log("server is up an running on port 3001")
    })
})

