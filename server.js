var express = require('express');
var app = express();
var PORT = 3000;
var middleware ={
    requireAuthentication: function (req, res, next) {
        console.log('Private route hit!');
        next();
    },
    logger: function (req, res, next) {
        var a = new Date().toString() + ' ' ;
        console.log('REQUEST: ' + a + req.method + ' ' + req.originalUrl);
        next();
    }
};

// genel her yerde
// app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
    res.send('this is about us: MeDe');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
    console.log('Express server started on port '+ PORT);
});
