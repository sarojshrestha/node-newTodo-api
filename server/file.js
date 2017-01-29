/*const fs = require('fs');
var data = {
    title:'hello world',
    body:'this is content'
}
fs.writeFileSync('jsonTest.js',JSON.stringify(data));

var read = fs.readFileSync('jsonTest.js')
console.log(JSON.parse(read));

fs.readFile('jsonTest.js', function(err,data){
    if(err) throw err;

    console.log(JSON.parse(data));
});
*/

const fs = require('fs');

/*var data = fs.readFileSync(__dirname + '/test.txt','utf-8');
console.log(data);
console.log('----------');
*/
fs.readFile(__dirname + '/test.txt','utf-8',(err, data)=>{
    if (err) return console.log(err);
    console.log(data);
});
console.log('The End');