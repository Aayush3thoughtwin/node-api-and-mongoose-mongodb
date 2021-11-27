const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/MyData',{useNewUrlParser: true},(err)=>
{
    if(!err){console.log('Mongodb conected bhiya')}
    else{
        console.log('Error'+err);
    }
});

const data = require('./emp.model.scema.js');