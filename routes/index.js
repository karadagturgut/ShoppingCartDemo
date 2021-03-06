var express = require('express');
var router = express.Router();
var Product = require('../models/products');
var csrf = require('csurf');

var csrfProtection = csrf();
router.use(csrfProtection)


/* GET home page. */
router.get('/', function(req, res, next) {
    var products = Product.find(function name(err, docs) {
        var prodChunks = [];
        var chunkSize = 3;
        for (let i = 0; i < docs.length; i += chunkSize) {
            prodChunks.push(docs.slice(i, i + chunkSize));

        }
        res.render('shop/index.hbs', { title: 'Shopping Cart', products: prodChunks });
    })
});

router.get('/user/signup', (req, res, next) => {
    res.render('user/signup.hbs', { csrfToken: req.csrfToken() })
});

router.post('/user/signup', function(req, res, next) {
    res.redirect('/');
})
module.exports = router;