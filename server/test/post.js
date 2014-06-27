var request = require('supertest'),
    should = require('should'),
    request = request('http://localhost:3000');

describe('TEST POST WS', function() {
    describe('CRUD OPERATIONS', function() {

        var post = {
            title:'new title',
            description : 'this is the description',
            urls: ['http://nodejs.org', 'http://mongoosejs.com']
        };

        it('SHOULD INSERT A NEW POST', function(done) {
            request.post('/posts')
                .send(post)
                .expect(201)
                .end(function(err, res) {
                    if(err) return done(err);
                    res.body.should.have.property('title','new title');
                    res.body.should.have.property('_id');
                    post = res.body;
                    done();
                });
        });
        it('SHOULD GET AN ARTICLE BY ID', function(done) {
            request.get('/posts/'+post._id)
                .expect(200)
                .end(function(err, res) {
                    if(err) return done(err);
                    res.body.should.have.property('title', 'new title');
                    done();
                });
        });
        it('SHOULD GET AN ARRAY OF ARTICLE BY CRITERIA', function(done) {
            request.get('/posts?_id='+post._id)
                .expect(200)
                .end(function(err, res) {
                    if(err) throw err;
                    res.body.should.be.instanceOf(Array).and.have.lengthOf(1);
                    done();
                });
        });
        it('SHOULD UPDATE AN EXISTING ARTICLE', function(done) {
            post.title = 'a new title';
            request.put('/posts')
                .send(post)
                .expect(201)
                .end(function(err, res) {
                    if(err) return done(err);
                    res.body.should.have.property('title', 'a new title');
                    done();
                });
        });
        it('SHOULD DELETE A POST', function(done) {
            request.delete('/posts/'+post._id)
                .expect(200)
                .end(function(err, res) {
                    if(err) return done(err);
                    res.body.should.have.property('title', 'a new title');
                    done();
                });
        });
    });
});