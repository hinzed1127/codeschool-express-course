var express = require('express'); //returns a function
var app = express(); //calling function returns instance of the application
//app can create routes for HTTP requests

app.get('/', function(request, response) {
    //sends back server response
    response.write('Hello world\n');
    response.end();
    //both of these functions are inherited from NodeJS
});

app.use(express.static('public'));
//serving static middleware from the public folder

app.listen(3000 /*tcp port*/, function(){
    //optional callback function that runs when the server is up and ready for requests
    console.log('Listening on port 3000...');
});