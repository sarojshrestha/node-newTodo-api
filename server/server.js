var express = require('express');
var bodyParser = require('body-parser');
const PORT = 3000;

//var Mongoose = require('./db/mongoose');
var Todo = require('./models/todos');

var User = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.get('/todo',(req,res)=>{
   Todo.find().then((data)=>{
       res.send(
           {
           data
        });
   },(err)=>{
       console.log(err)
   })
});

app.post('/todo',(req, res)=>{
    console.log('Server post test', req.body.text);
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