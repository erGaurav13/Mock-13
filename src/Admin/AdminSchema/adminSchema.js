

const mongoose = require('mongoose');
const adminSchema= new mongoose.Schema({
    companyname:{
        type:String,
        required:true,
        trim:true
    },
    position:{
        type:String,
        required:true,
        trim:true
    },
    contract:{
        type:String,
        required:true,
        trim:true
    },
    locatioon:{
        type:String,
        required:true,
        trim:true
    },
},
{versionKey:false}

)
const Admin=mongoose.model("admin",adminSchema);
module.exports = Admin;
