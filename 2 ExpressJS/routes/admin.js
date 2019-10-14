const express = require('express')
const path = require('path');

const routes = express.Router();

routes.get('/product-page',(req, res, next) => {
    console.log('In another middleware!');
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
});

routes.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports = routes;