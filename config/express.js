/**
 * Created by Administrator on 12/29/2015.
 */
var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride  = require('method-override'),
    session = require('express-session'),
    passport  =require('passport'),
    flash = require('connect-flash');
module.exports = function () {
    var app = express();
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({extended : true}));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(express.static('./public'));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());
    app.set('views','./views');
    app.set('view engine', 'ejs');
    require('../routes/index.server.routes.js')(app);

    return app;
};