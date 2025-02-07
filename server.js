const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 5000
const Route = require('./Route/bookroute')
const Book = require('./model/bookmodel')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")

mongoose.connect("mongodb+srv://Yakshrajsinh:H0vugViHddcRr7pt@crud.qu43a.mongodb.net/BookStore")
    .then(() => {
        console.log("db connect 🙌");
    }).catch((err) => {
        console.log(err);

    })

app.get("/",async(req,res)=>{
    const book = await Book.find() 
    res.render("pages/form",{
        book
    })
})

app.use('/api/book', Route)
app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
})