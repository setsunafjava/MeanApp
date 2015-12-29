/**
 * Created by Administrator on 12/29/2015.
 */
var express = require('./config/express');

var app = express();

var server = require('http').createServer(app);

server.listen(3000,function(err){
    console.log('Listening 3000....');

});
module.exports = app;
