const { Schema, model } = require("mongoose");

const common=
{
    type:String,
    require:true,
    trim:true
}
const Bookschema= new Schema({
    book_name:common,
    book_price:{
        ...common,
        type:Number,
        unique:true
    },
    book_desc:common
})

const Book=model('Book',Bookschema)

module.exports=Book