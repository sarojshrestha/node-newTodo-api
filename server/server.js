var express = require('express');
var mongodb = require('mongodb'); 
var bodyParser = require('body-parser');
const PORT = 3000;

//var Mongoose = require('./db/mongoose');
var Todo = require('./models/todos');

var User = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.get('/todo',(req,res)=>{
   Todo.find().then((data)=>{ 
       res.send({data});
   },(err)=>{
       console.log(err)
   })
});
//GET todo/3122
app.get('/todo/:id',(req, res)=>{
    var id = req.params.id;
    if(!mongodb.ObjectID.isValid(id)){
        return res.status(404).send('Not found Id');
    }
    Todo.findById(id).then((data)=>{
        if(!data){
            return res.status(400).send('Bad request');
        }
        res.send({data});
    }).catch((e)=>{
        res.status(400).send('Invalid');
    });
});

app.post('/todo',(req, res)=>{
    console.log('ServerPostTest', req.body.text);
var todo = new Todo({
    text:req.body.text
});
todo.save().then((data)=>{
    res.send(data);
},(err)=>{
    res.status('400').send(err);
})

});

app.listen(PORT, ()=>{
    console.log('Server is running on port', PORT);
})

module.exports = app;