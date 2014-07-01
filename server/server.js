var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    config = require('./config/config.js'),
    fs = require('fs');

mongoose.connect(config.MONGO.URL+'/'+config.MONGO.DBNAME);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error : '));
db.once('open', function () {
    console.log('Mongoose successfully connected ');
});

// Bootstrap models
var models_path = __dirname + '/models';
fs.readdirSync(models_path).forEach(function (file) {
    if (~file.indexOf('.js')) require(models_path + '/' + file)
});

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/src'));
app.use(express.static(__dirname + '/../client/bower_components'));
require('./config/routes.js')(app);

var server = app.listen(3000, function() {
    console.log('Server running listening on port 3000');
});