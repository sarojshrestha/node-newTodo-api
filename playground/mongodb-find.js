const MongoClient = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp'

MongoClient.connect(url,function(err, db){

var col = db.collection('Todos');

col.find({_id:MongoClient.ObjectId('5885758916ef5d0abd421a40')}).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs));
},(err)=>{
    console.log('Unable to fetch todos', err)
});

//Counting
col.find().count().then(function(count){
    console.log(`Total: ${count}`);
});



db.close();

});