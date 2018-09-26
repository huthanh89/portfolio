//-----------------------------------------------------------------------------//
// Imports
//-----------------------------------------------------------------------------//

const path = require('path');
const express = require('express');
const app = express();

// Set view engine to pug and specify the file locations.

app.set('view engine', 'pug')
app.set("views", path.join(__dirname, "dist"));

// Use files under following directories.

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/dist'));

// Handle route.

app.get('/', function(req, res){
    res.render('index');
});

// Listen app on the following port.

app.listen(3000, () => console.log('Example app listening on port 3000!'))

//-----------------------------------------------------------------------------//
