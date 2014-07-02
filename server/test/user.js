var request = require('supertest'),
    should = require('should'),
    request = request('http://localhost:3000');

describe('TEST USER WS', function() {
    describe('CRUD OPERATIONS', function() {

        var user = {
            email:'benjamin.o.bunny@google.com',
            password : 'iwillchangeit'
        };

        it('SHOULD INSERT A NEW USER', function(done) {
            request.post('/users')
                .send(user)
                .expect(201)
                .end(function(err, res) {
                    if(err) return done(err);
                    res.body.should.have.property('email', user.email);
                    res.body.should.have.property('_id');
                    user = res.body;
                    done();
                });
        });
        it('SHOULD GET AN USER BY ID', function(done) {
            request.get('/users/'+user._id)
                .expect(200)
                .end(function(err, res) {
                    if(err) return done(err);
                    res.body.should.have.property('email', user.email);
                    done();
                });
        });
        it('SHOULD DELETE A USER', function(done) {
            request.delete('/users/'+user._id)
                .expect(200)
                .end(function(err, res) {
                    if(err) return done(err);
                    res.body.should.have.property('email', user.email);
                    done();
                });
        });
    });
});