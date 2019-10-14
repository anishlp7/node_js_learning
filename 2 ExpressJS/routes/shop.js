const Express = require('express')
const path = require('path')

const routes = Express.Router();

routes.get('/',(req, res, next) => {
    console.log('In another middleware!');
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
});

module.exports = routes;