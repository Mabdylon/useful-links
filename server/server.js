var express = require('express')
	, session = require('express-session')
    , mongoose = require('mongoose')
    , bodyParser = require('body-parser')
    , config = require('./config/config.js')
    , fs = require('fs')
    , passport = require('passport')
    ;

mongoose.connect(config.MONGO.URL+'/'+config.MONGO.DBNAME);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error : '));
db.once('open', function () {
    console.log('Mongoose successfully connected ');
});

// Bootstrap models
var models_path = __dirname + '/models';
fs.readdirSync(models_path).forEach(function (file) {
    if (~file.indexOf('.js')) require(models_path + '/' + file);
});

require('./config/passport')(passport);

var app = express();

app.use(session({ secret: 'ilovescotchscotchyscotchscotch', resave : true, saveUninitialized : true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/src'));
app.use('/bower_components', express.static(__dirname + '/../client/bower_components'));
require('./config/routes.js')(app, passport);

var server = app.listen(3000, function() {
    console.log('Server running listening on port 3000');
});