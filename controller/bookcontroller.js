const Book=require('../model/bookmodel')

const store=async(req,res)=>{
    console.log(req.body.book_name);
    const {book_name,book_price,book_desc}=req.body
   await Book.create({
        book_name,book_price,book_desc
    })
    res.json({
        messege:'data inserted'
    })
}
const index=async(req,res)=>{
    const book=await Book.find()
    res.json({
        success:true,
        book
    })
    console.log(book); 
}
const single=async(req,res)=>{
    const id=req.params.id
    // console.log(id);
    const book=await Book.findById(id)
    res.json({
        book
    })
}


module.exports={store,index,single}