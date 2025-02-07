const Book=require('../model/bookmodel')

const store=async(req,res)=>{
    console.log(req.body);
    const {book_title,book_price,book_desc,book_auth}=req.body
   await Book.create({
    book_title,book_price,book_desc,book_auth
    })
    res.redirect("/")
}
const index=async(req,res)=>{
    const book=await Book.find()
    res.json({
        success:true,
        book
    })
    console.log(book); 
}

const trash=async(req,res)=>{
    const {id} = req.params    
    console.log(id);
    const book=await Book.findByIdAndDelete(id)
    res.json({
        messege:'data deleted',
        book
    }) 
}


module.exports={store,index,trash}