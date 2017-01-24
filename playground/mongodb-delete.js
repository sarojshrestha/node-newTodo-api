const MongoClient = require('mongodb').MongoClient;
var url = 'Mongodb://localhost:27017/TodoApp';

MongoClient.connect(url,function(err, db){
var col = db.collection('Todos');
//Insert Many
/*col.insertMany([{a:1},{b:1,d:1},{c:1}]).then(
    function(result){
        console.log(result.ops);
    },
    function(err){});
    */
//Delete
/*col.findOneAndDelete({completed:false}).then(function(result){
    console.log(result);
});
*/

col.deleteMany({c:1}).then(function(r){
    console.log(r);
});
    db.close();
});
