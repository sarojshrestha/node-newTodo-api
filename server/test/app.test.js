var app = require('./../server.js');
var request = require('supertest');

app.get('/user', function(req, res){
    res.status(200).json({name:'tobi'});
});

describe('GET /user', function(){
    it('respond with json', function(done){
    request(app)
        .get('/user')
        //.set('Accept', 'application/json')
        .expect('Content-Type',/json/)
        .expect(200,done);
    });
});

describe('GET /user', function(){
    it('user.name should be an case-intensive match for tobi', function(done){
        request(app)
            .get('/user')
            .set('Accept', 'application/json')
            .expect(function(res){
                res.body.id='some fixed id';
                res.body.name=res.body.name.toUpperCase()
            })
            .expect(200,{
                id:'some fixed id',
                name:'TOBI'
            },done);
    });
});


