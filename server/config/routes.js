var posts = require('../controllers/posts.js')
    , users = require('../controllers/users.js');

var routes = function(app, passport) {

    // routes pour posts
    app.route('/posts')
        .post(posts.create)
        .get(posts.list)
        .put(posts.update);

    app.route('/posts/:id')
        .get(posts.findOne)
        .delete(posts.remove);

    app.put('/posts/vote/:id', posts.vote);
    app.put('/posts/comment/:id', posts.comment);

    // routes pour users
    // app.post('/users', users.create);
    app.post('/users', passport.authenticate('local-signup'), function(req, res) {
        res.send('201', req.user);
    });

    app.route('/users/:id')
        .get(users.findOne)
        .delete(users.remove);
};

 module.exports = routes;