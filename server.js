const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 5000
const Route = require('./Route/bookroute')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://Yakshrajsinh:7xfhwJZQ5lz6fzx4@crud.qu43a.mongodb.net/BookStore")
    .then(() => {
        console.log("db connect");
    }).catch((err) => {
        console.log(err);

    })
app.use('/api/book', Route)
app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
})