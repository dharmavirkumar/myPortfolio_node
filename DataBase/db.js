const { name } = require('ejs');
const mongoose  = require('mongoose');


const tryShema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    contact:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        
    },
    massage:{
        type:String,
        require:true,
    },

})


module.exports = mongoose.model("User",tryShema);