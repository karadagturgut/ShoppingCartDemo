var express = require('express');
var router = express.Router();
var Product = require('../models/products');


/* GET home page. */
router.get('/', function(req, res, next) {
    var products = Product.find(function name(err,docs)  
    {
        var prodChunks =[];
        var chunkSize = 3;
        for (let i = 0; i < docs.length; i+=chunkSize) {
            prodChunks.push(docs.slice(i,i+chunkSize));
            
        }
        res.render('shop/index.hbs', { title: 'Shopping Cart', products: prodChunks  });
    }) 
});

module.exports = router;