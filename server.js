const express = require('express');
const app = express();
require('dotenv').config();
const Show = require('./models/show.js');
const methodOverride = require('method-override');




///////////////////////////////////////////////////////////////////////////////
//////////////////////// MIDDLEWARE ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

//body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }));


//methodOverride
app.use(methodOverride('_method'));


///////////////////////////////////////////////////////////////////////////////
//////////////////////////////// DATABASE /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// Dependencies 
const mongoose = require('mongoose');

// Database Configuration
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Database Connection Error / Success
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


///////////////////////////////////////////////////////////////////////////////
///////////////////////////////// ROUTES / CONTROLLERS ////////////////////////
///////////////////////////////////////////////////////////////////////////////
// Home screen
app.get('/shows', (req, res)=>{
    res.render('home.ejs');
});

// Index - display all .....
// app.get('/shows/allShows', (req, res) => {
//     Show.find({}, (error, allShows) => {
//         res.render('index.ejs', {
//             shows: allShows,
//         });
//     });
// });

// New - display form to add a new .....
app.get('/shows/new', (req, res) => {
    res.render('new.ejs');
});


// Delete - delete a single ....


// Update - update a single ..



// Create - create a new ...
app.post('/shows/new', (req, res) => {
    Show.create(req.body, (error, createShow) => {
        res.send(createShow);
    });
});

// // Edit - display form to update a ....
// app.get('/shows/:id/edit', (req, res) => {
//     Show.findById(req.params.id, (error, foundShow) => {
//         res.render('edit.ejs', {
//             show: foundShow
//         });
//     });
// });

// Show - display a single 



//////////////////////////////////////////////////////////////
/////////////////////////////// LISTENER /////////////////////
/////////////////////////////////////////////////////////////
const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`server is listening on port:`, PORT);
});