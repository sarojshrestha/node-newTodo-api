const MongoClient = require('mongodb');
var url = 'mongodb://localhost:27017/TodoApp'
MongoClient.connect(url,function(err,db){
var col = db.collection('Users');

col.findOneAndUpdate({_id:MongoClient.ObjectId('588577b587cdae0ae5a6c6a1')},
{$set:{
    name:'Saroj Shrestha'
},
$inc:{age:1},
$unset:{address:''}
},
{returnOrginal:false}
).then(function(r){
    console.log(r);
});

    db.close();
})