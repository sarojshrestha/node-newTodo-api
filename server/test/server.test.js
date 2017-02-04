const expect = require('expect');
const request = require('supertest');
const objectId = require('mongodb').ObjectID;

//console.log("New objectid ", new objectId());
const app = require('./../server.js');
const Todo = require('./../models/todos.js'); 
const todos = [
    {
    _id:new objectId(),
    text:'First test todo'
    },
    {
    _id:new objectId(),
    text:'Second test todo'
    }
];

beforeEach((done)=>{
    Todo.remove({}).then(()=>{
        return Todo.insertMany(todos);
    }).then(()=>done());
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

        Todo.find({text}).then((todos)=>{
            console.log(todos);
            expect(todos.length).to.be(1);
            expect(todos[0].text).to.be(text);
            done();
        }).catch((e)=>done(e));
        });
    });

    it('should not create todo',function(done){
        request(app)
            .post('/todo')
            .send({})
            .expect(400)
            .end((err,res)=>{
                if(err)
                { 
                    return done(err)
                }
            Todo.find().then((todos)=>{
                expect(todos.length).to.be(2);
                done();
            }).catch((e)=>done(e));
            });
    });
   });

   describe('GET /todos', function(){
       it('should get all todos', function(done){
           request(app)
            .get('/todo')
            .expect(200)
            .expect(function(res){
                expect(res.body.data.length).to.be(2);
            })
            .end(done);
       });
   });

describe('Get /todos/id', function(){
    it('should get doc by id', function(done){
        request(app)
       .get(`/todo/${todos[0]._id.toHexString()}`)
       .expect(200)
       .expect(function(res){
           expect(res.body.data.text).to.be(todos[0].text);
       })
       .end(done);
    });

    it('should return 400 id todo not found', function(done){
        request(app)
        .get('/todo/5895d71dfd2c921ea908589b')
        .expect(400)
        .expect(function(res){
            expect(res.status).to.be(400)
        })
        .end(done);
    });

    it('should return 404 for non object ids', function(done){
        request(app)
        .get('/todos/23')
        .expect(404)
        
        .end(done);
    })
});


describe('test suite', function(){
    it('should expose a function', function(){
        expect(add).to.be.a('function');
    });

    it('should do math', function(){
        expect(add(2,4)).to.equal(6);
    })
});
