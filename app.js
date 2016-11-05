'use strict';

var express = require('express'); //returns a function
var app = express(); //calling function returns instance of the application
//app can create routes for HTTP requests
var middleware = require('./middleware');



app.use(middleware());
app.use(express.static('public'));
//serving static middleware from the public folder

app.get('/', function(req, res) {
    //sends back server response
    // response.send('Hello world\n');
    console.log('Current time: ' + req.requestTime);
    res.end();
    //both of these functions are inherited from NodeJS
});

app.listen(3000 /*tcp port*/, function(){
    //optional callback function that runs when the server is up and ready for requests
    console.log('Listening on port 3000...');
});