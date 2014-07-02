var mongoose = require('mongoose')
    , User = mongoose.model('User');

exports.create = function(req, res) {
	/*
    var newUser = new User(req.body);
    newUser.save(function(err, savedUser) {
        if (err) throw err;
        res.send(201, savedUser);
    });
    */
    res.send('403');
};

exports.findOne = function(req, res) {
    var id = req.params.id;
    User.load(id, function(err, user) {
        if(err) throw err;
        res.send('200', user);
    });
};

exports.findOneByEmail = function(req, res) {
    var email = req.params.email;
    User.loadByEmail(email, function(err, user) {
        if(err) throw err;
        res.send('200', user);
    });
};

exports.remove = function(req, res) {
	var id = req.params.id;
    User.findByIdAndRemove(id, {}, function(err, deletedUser) {
        if(err) throw err;
        res.send('200', deletedUser);
    });
};

exports.subscribe = function(req, res) {
	console.log("user subscribe ", req.body);
};