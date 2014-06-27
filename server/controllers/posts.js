var mongoose = require('mongoose')
    , Post = mongoose.model('Post');

exports.create = function(req, res) {
    var newPost = new Post(req.body);
    newPost.save(function(err, savedPost) {
        if (err) return console.error(err);
        res.send(201, savedPost);
    });
};