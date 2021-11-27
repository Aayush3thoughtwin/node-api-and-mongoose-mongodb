const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({

    name:{
        type:String,required:true
    },
    city:{
        type:String,required:true
    },
});

const use = mongoose.model('Created',empSchema);

module.exports  = use;