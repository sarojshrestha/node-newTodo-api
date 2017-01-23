const MongoClient = require('mongodb');


var url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, function(err,db){
    if (err){ return console.log('unable to connect', err);}
    console.log('Connected successfully to server');
/*
    db.collection('Todos').insertOne({
        text:'Something to do',
        completed:false
    },function(err, r){
        if(err){return console.log('Unable to insert into Todos', err)}
        console.log(JSON.stringify(r.ops));
    });

    db.collection('Users').insertMany(
        [{
            name:'Saroj',
            location:'Nepal',
            age:35
        },{
            name:'Mandira',
            location:'Nepal',
            age:34
        }
        ],function(err, r){
        if(err){return console.log('Unable to insert into Users')}
        console.log(JSON.stringify(r.ops));
    });
*/
    db.close();
});