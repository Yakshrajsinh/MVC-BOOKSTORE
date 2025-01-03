const { Schema, model } = require("mongoose");

const common=
{
    type:String,
    require:true,
    trim:true
}
const Bookschema= new Schema({
    book_title:common,
    book_price:{
        ...common,
        type:Number,
        // unique:true
    },
    book_desc:common,
    book_auth:common
})

const Book=model('Book',Bookschema)

module.exports=Book