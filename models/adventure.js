const mongoose = require('mongoose');

// const adventureSchema = new mongoose.Schema({
//     img: {
//         data: Buffer,
//         contentType: String
//     }, 
//     name: {type: String, required: true},
//     desc: {type: String, required: true},
//     price: {type: Number}
// });

// const Adventure = mongoose.model('Adventure', adventureSchema);


class Adventure {
    constructor( title, price, desc){
        this.title = title;
        this.price = price;
        this.desc = desc;
    }
}

const dVdining = new Adventure('Death Valley Dining', 500, `Does eating a meal in one of the most hottest and dangerous places on Earth sound pleasant to you? Well, you’re at the right place!  All meals will be created from plants / animals of the desert! Be ready for surprises. Set your sights on this extreme dining experience you won’t ever forget.`);

console.log(dVdining);



module.exports = Adventure;