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

module.exports = middleware;
