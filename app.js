'use strict';

var express = require('express'); //returns a function
var app = express(); //calling function returns instance of the application
//app can create routes for HTTP requests
var middleware = require('./middleware');

app.use(middleware());

app.use(express.static(__dirname + '/public'));
//serving static middleware from the public folder

app.get('/test', function(req, res) {
    //sends back server response

    console.log('Current time: ' + req.requestTime);
    //requestTime property set by middleware.js

    res.send('testing');
    //both of these functions are inherited from NodeJS
});

app.listen(3000 /*tcp port*/, function(){
    //optional callback function that runs when the server is up and ready for requests
    console.log('Listening on port 3000...');
});