var posts = require('../controllers/posts.js');

var routes = function(app) {

    app.post('/posts', posts.create);

};

 module.exports = routes;