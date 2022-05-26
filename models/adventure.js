// const adventures = [
//     {
//         title:'Death Valley Dining',
//         description: `Does eating a meal in one of the most hottest and dangerous places on Earth sound pleasant to you? Well, you’re at the right place!  All meals will be created from plants / animals of the desert! Be ready for surprises. Set your sights on this extreme dining experience you won’t ever forget.`,
//         price: 500
//     },
//     {
//         title:'Grand Canyon Grappling',
//         description: `Sweat, dirt, fighting, and the great outdoors. If you’re missing some dirt in your life, this is a fantastic way to get it. No fighting experience required, but totally necessary if you don’t want a face full of dirt! Win or lose, beautiful sunsets and quiet canyon skies will follow your dirt-filled experience. `,
//         price: 200
//     },
//     {
//         title: 'Yosemite Paragliding',
//         description: 'Do you ever just feel like jumping off a cliff sometimes? Well, this adventure will be perfect for you! Jump off as many cliffs as you want while you soar through the clouds in a high-quality paraglider. NOT recommended for those with a fear of heights. Other than that, paragliding is just as safe as driving !',
//         price: 800
//     }
// ];


const mongoose = require('mongoose');

const adventureSchema = new mongoose.Schema({
    image: {type: String},
    title:  { type: String, required: true },
    price:  { type: Number, required: true },
    description:  { type: String},
    stock: {type: Number}
});

const Adventure = mongoose.model('Adventure', adventureSchema);

module.exports = Adventure
// module.exports = adventures;