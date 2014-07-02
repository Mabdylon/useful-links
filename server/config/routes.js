var posts = require('../controllers/posts.js');

var routes = function(app) {

    app.post('/posts', posts.create);
    app.put('/posts', posts.update);
    app.get('/posts', posts.list);
    app.get('/posts/:id', posts.findOne);
    app.delete('/posts/:id', posts.remove);
    app.put('/posts/vote/:id', posts.vote);
};

 module.exports = routes;