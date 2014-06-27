var request = require('supertest');
request = request('http://localhost:3000');

var post = {
    title:'new title',
    description : 'this is the description',
    urls: ['http://nodejs.org', 'http://mongoosejs.com']
};

describe('DO A REQUEST ON POST WS', function() {
    describe('CRUD', function() {
        it('SHOULD INSERT A NEW POST FROM WS', function(done) {

            request.post('/posts')
                .send(post)
                .expect(201)
                .end(function(err, res) {
                    if(err) return done(err);
                    done();
                });
        });
    });
});