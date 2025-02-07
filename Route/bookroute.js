const controller=require('../controller/bookcontroller')
const express=require('express')
const app=express()

app.post('/',controller.store)
app.get('/',controller.index)
app.get('/:id',controller.trash)

module.exports=app