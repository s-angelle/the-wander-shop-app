require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const method = require('method-override');
const app = express('express');
const PORT = 3001;
const Adventure = require('./models/adventure');

// === Connection to Database ===

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => console.log('Connected to Mongo'));

// === Engine Setup ===
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// === Middleware ===
app.use(express.urlencoded({extended:false}));
app.use(method('_method'));
app.use(express.static('public'));


// REMEMBER TO DELETE THE CONSOLE.LOG WHEN COMPLETE

// Using Express middleware to parse JSON.
app.use(express.json());
app.use((req, res, next) => {
    console.log('I run for all the routes.');
    next();
})

// === Routes === 

// Index
app.get('/adventures', (req, res) => {
    // Query model to return all adventures
    // Adventure.find({}, (err, allAdventures) => {
    //     res.render('index', {adventures: allAdventures});
    //     if(!err){
    //         res.status(200).redirect('/adventures');
    //     } else {
    //         res.status(404).json(err);
    //     }
    // });
    res.send('<p> INDEX <p>')
});

// New
// app.get('/adventures/:id', (req, res) => {
//     res.render('new');
// });

// Delete
// app.delete('adventures/:id', (req, res) => {
//     Adventure.findByIdAndDelete(req.params.id, (err) => {
//         if(!err){
//             res.status(200).redirect('/adventures');
//         } else {
//             res.status(404).json(err);
//         }
//     });
// });

// Update
// app.put('/adventures/:id', (req, res) => {
//     Adventure.findbyIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedAdventure) => {
//         if(!err){
//             res.status(200).redirect('/adventures');
//         } else {
//             res.status(400).json(err);
//         }
//     });
// });

// Create
// app.post('/adventures', (req, res) => {
//     Adventure.create(req.body, (err, createdAdventure) => {
//         if(!err){
//             res.status(200).redirect('/adventures');
//         } else {
//             res.status(400).json(err);
//         }
//     });

//     res.redirect('/adventures');
// });

// Edit
// app.get('/adventures/:id/create', (req, res) => {
//     Adventure.findById(req.params.id, (err, foundAdventure) => {
//         if(!err){
//             res.render('create', {adventure: foundAdventure});
//         } else {
//             res.status(400).json(err);
//         }
//     });
// });

// Show
// app.get('/adventures/:id', (req, res) => {
//     Adventure.findById(req.params.id, (err, foundAdventure) => {
//         res.render('/about', {adventure: foundAdventure});
//     })
// });

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));