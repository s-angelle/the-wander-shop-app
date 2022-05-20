const mongoose = require('mongoose');

const adventureSchema = new mongoose.Schema({
    img: {
        data: Buffer,
        contentType: String
    }, 
    name: {type: String, required: true},
    desc: {type: String, required: true},
    price: {type: Number}
});

const Adventure = mongoose.model('Adventure', adventureSchema);

module.exports = Adventure;