var mongoose = require('mongoose')
    , Post = mongoose.model('Post');

var perPage = 30;

exports.create = function(req, res) {
    var newPost = new Post(req.body);
    newPost.save(function(err, savedPost) {
        if (err) return console.error(err);
        res.send(201, savedPost);
    });
};

exports.list = function(req, res) {
    var page = (req.param('page') > 0 ? req.param('page') : 1) - 1;
    var options = {
        page : page,
        perPage: perPage,
        criteria: req.query
    };
    Post.list(options, function(err, posts) {
        if(err) throw err;
        res.send('200', posts);
    })
};

exports.findOne = function(req, res) {
    var id = req.params.id;

    Post.load(id, function(err, post) {
         if(err) throw err;
        res.send('200', post);
    });
};

exports.update = function(req, res) {
    var id = req.body._id;
    Post.findByIdAndUpdate(id, req.body, {}, function(err, savedPost) {
        if(err) throw err;
        res.send('201', savedPost);
    });
};

exports.vote = function(req, res) {
    var id = req.params.id;
    Post.load(id, function(err, post) {
        if(err) throw err;
        post.vote++;
        res.send('200', post);
    });
}

exports.remove = function(req, res) {
    var id = req.params.id;
    Post.findByIdAndRemove(id, {}, function(err, deletedPost) {
        if(err) throw err;
        res.send('200', deletedPost);
    });
};