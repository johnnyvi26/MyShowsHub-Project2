const express = require('express')
const showRouter = express.Router();
const Show = require('../models/show')

// Home screen
showRouter.get('/', (req, res) => {
    res.render('home.ejs');
});

// Index - display all .....
showRouter.get('/allShows', (req, res) => {
    Show.find({}, (error, allShows) => {
        res.render('index.ejs', {
            shows: allShows,
        });
    });
});

// New - display form to add a new .....
showRouter.get('/new', (req, res) => {
    res.render('new.ejs');
});


// Delete - delete a single ....
showRouter.delete('/:id', (req, res) => {
    Show.findByIdAndRemove(req.params.id, (error, deletedShow) => {
        res.redirect('/allShows');
    });
});

// Update - update a single ..
showRouter.put('/:id', (req, res) => {
    Show.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (error, updatedShow) => {
            res.redirect(`/${req.params.id}`);
        }
    );
});


// Create - create a new ...
showRouter.post('/new', (req, res) => {
    Show.create(req.body, (error, createShow) => {
        res.redirect('/allShows');
    });
});

// // Edit - display form to update a ....
showRouter.get('/:id/edit', (req, res) => {
    Show.findById(req.params.id, (error, foundShow) => {
        res.render('edit.ejs', {
            show: foundShow,
        });
    });
});

// Show - display a single 
showRouter.get('/:id', (req, res) => {
    Show.findById(req.params.id, (error, foundShow) => {
        res.render('show.ejs', {
            show: foundShow,
        });
    });
});


module.exports = showRouter;