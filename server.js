require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3001;
const Adventure = require('./models/Adventure');


// === CONNECTION TO DATABASE ===
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology:true
});

mongoose.connection.once('open', () => console.log('Connected to Mongo'));

// === SET UP VIEW ENGINE ===
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// === SET UP MIDDLEWARE ===
app.use(express.urlencoded({extended:false}));

// PARSING JSON
app.use(express.json());
app.use((req, res, next) => {
    console.log('I run for all the routes.');
    next();
});



//  
// INDEX
app.get('/adventures', (req, res) => {
    Adventure.find({}, (err, allAdventures ) => {
        res.render('Index', {adventures: allAdventures});
    });
    // res.render('Index', {adventures: adventures});
});

// NEW

app.get('/adventures/new', (req, res) => {
    res.render('New');
});

// DELETE

// UPDATE
app.put('/adventures/:id', (req, res) => {

});

// CREATE
app.post('/adventures', (req, res) => {
    // adventures.push(req.body);
    Adventure.create(req.body, (err, createdAdventure) => {
        // res.send(createdAdventure)
        res.redirect('/adventures');     
    })
});

// EDIT
app.get('/adventures/:id/edit', (req, res) => {
    
});

// SHOW

app.get('/adventures/:id', (req, res) => {
    Adventure.findById(req.params.id, (err, foundAdventure) => {
        res.render('Show', {adventures: foundAdventure});
    });
    // res.render('Show', {adventure: adventures[req.params.indexOfAdventuresArray]});
});



app.listen(PORT, () => console.log(`Listening to port ${PORT}`));

