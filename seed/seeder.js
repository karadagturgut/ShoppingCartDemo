var Product = require('../models/products');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Shopping');

var products = [new Product({
        imagePath: "https://www.boeschbodenspies.com/wp-content/uploads/2017/08/orange.png",
        title: "Orange",
        description: "The orange is the fruit of various citrus species in the family Rutaceae which is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange. The sweet orange reproduces asexually (apomixis through nucellar embryony); varieties of sweet orange arise through mutations.",
        price: "$0,69"

    }),
    new Product({
        imagePath: "https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png",
        title: "Apple",
        description: "An apple is an edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus.",
        price: "$0,79"

    }),
    new Product({
        imagePath: "https://www.aicr.org/wp-content/uploads/2019/12/carrots-thumb-1.jpg",
        title: "Carrot",
        description: "The carrot is a root vegetable, usually orange in color, though purple, black, red, white, and yellow cultivars exist. They are a domesticated form of the wild carrot, Daucus carota, native to Europe and Southwestern Asia. The plant probably originated in Persia and was originally cultivated for its leaves and seeds.",
        price: "$0,89"

    }),
    new Product({
        imagePath: "https://gpi-degouwe.com/wp-content/uploads/2020/06/Potatoes.jpg",
        title: "Potato",
        description: "The potato is a root vegetable native to the Americas, a starchy tuber of the plant Solanum tuberosum, and the plant itself is a perennial in the nightshade family, Solanaceae.",
        price: "$0,99"

    }),
    new Product({
        imagePath: "https://www.gardeningknowhow.com/wp-content/uploads/2020/03/primo-vantage-400x350.jpg",
        title: "Cabbage",
        description: "Cabbage is a leafy green, red, or white biennial plant grown as an annual vegetable crop for its dense-leaved heads. It is descended from the wild cabbage, and belongs to the 'cole crops' or brassicas, meaning it is closely related to broccoli and cauliflower; Brussels sprouts; and Savoy cabbage.",
        price: "$1,09"

    }),

];
var done = 0;
for (let i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });

}

function exit() {
    mongoose.disconnect();
}