const expect = require('expect');
const request = require('supertest');

const app = require('./../server.js');
const Todo = require('./../models/todos.js'); 

beforeEach((done)=>{
    Todo.remove({}).then(()=>{
        console.log(done);
        done();
    })
/*Todo.find().then((data)=>{
    console.log(data);
},(e)=>{
    console.log(e);
})*/
});

function add(a,b){
    return a + b;
}

     //console.log('res ' + app.res.body.text)

describe('POST /todos', function(){
    it('should create a new todo',function(done){
        var text = 'Test todo text';
   
        request(app)
         .post('/todo')
         .send({text})
         .expect(200)
         .expect(function(res){
             expect(res.body.text).to.be(text);
         })
         .end(function(err,res){
             if(err){ 
                 return done(err);
                 }

        Todo.find().then((todos)=>{
            console.log(todos);
            expect(todos.length).to.be(1);
            expect(todos[0].text).to.be(text);
            done();
        }).catch((e)=>done(e));
        });
    });
});


describe('test suite', function(){
    it('should expose a function', function(){
        expect(add).to.be.a('function');
    });

    it('should do math', function(){
        expect(add(2,4)).to.equal(6);
    })
});
