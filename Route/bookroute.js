const controller=require('../controller/bookcontroller')
const express=require('express')
const app=express()

app.post('/',controller.store)
app.get('/',controller.index)
app.get('/:id',controller.single)
app.delete('/:id',controller.trash)
app.put('/',controller.update)

module.exports=app