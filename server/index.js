const express = require("express")
const mongoose = require('mongoose')
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const Post = require('./models/Post')

app.use(bodyParser.json())
app.use(cors())

function start(){
    const PORT = 5000 || process.env.PORT
    app.listen(PORT, ()=> {
        console.log("Server has been started on port " + PORT)
    })
    const password = 'lki4BN6vS1rFbCI1'
    mongoose.connect(`mongodb+srv://ahmadxon2008:${password}@cluster0.ljka0vv.mongodb.net/test`,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

}
start()

app.post("/add", async (req,res)=>{
    const {district, street} = req.body
    console.log(req.body)
    if (!district || !street){
        res.redirect("/")
        return
    }
    const postData = {
        district,
        street
    }
    await Post.create(postData)
    res.redirect('/')
})
app.get("/statistics", async (req,res)=>{
    res.json(await Post.find())
    return Post.find();
})

