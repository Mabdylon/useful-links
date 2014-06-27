var posts = require('../controllers/posts.js');

var routes = function(app) {

    app.post('/posts', posts.create);
    app.get('/posts/:id', posts.findOne);
    app.get('/posts', posts.list);
    app.put('/posts', posts.update);
    app.delete('/posts/:id', posts.remove);

};

 module.exports = routes;