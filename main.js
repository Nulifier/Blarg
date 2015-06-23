var express		= require('express');
var compression	= require('compression');




var app = express();



// Middleware
app.use(compression());
app.use(express.static('public-build'));

// Event listener
var server = app.listen(3000, function () {

});