
var mongoose = require('../db/mongoose.js');
//var mong = require('../db/mongoose.js');

var todoSchema = mongoose.Schema({
    text: {
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        default:null
    }
});

var Todo = mongoose.model('Todo',todoSchema);
module.exports = Todo;