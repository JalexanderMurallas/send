const mongoose = require('mongoose');

const SignUpTemplates = new mongoose.Schema({
    fullname:{
        type:String,
        required:true

    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model('mytable', SignUpTemplates)