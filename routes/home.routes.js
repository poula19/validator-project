const app = require('express').Router()
const { validationResult } = require('express-validator')
const userModel = require('../models/home.model')
const validation=require('../validation/form1.validation')

app.get('/', async(req, res) => {
    const data = await userModel.find()
    res.render('index', { data ,error:[],oldInputs:{name:'',email:'',password:''}})
})



app.post('/handleForm', validation,async(req, res) => {
 const error = validationResult(req)
 console.log(error.array());
 console.log(error.isEmpty());

    const { name, email, password } = req.body

  
    if(error.isEmpty( )){
     
    await userModel.insertMany({ name, email, password })
    res.redirect('/')
}else{
    const data = await userModel.find()
    res.render('index.ejs',{error:error.array(),data,oldInputs:{name,email,password}});
}
});

app.get('/delete/:id', async(req, res) => {
    const _id = req.params.id
    await userModel.deleteOne({ _id })
    res.redirect('/')
})
module.exports = app