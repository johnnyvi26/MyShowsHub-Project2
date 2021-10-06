const express = require('express');
const app = express();
require('dotenv').config();


//////////////// ROUTES / CONTROLLERS /////////////

app.get('/shows/home', (req, res)=>{
    res.render('show.ejs');
});



//////////////// LISTENER ////////////
const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`server is listening on port:`, PORT);
});