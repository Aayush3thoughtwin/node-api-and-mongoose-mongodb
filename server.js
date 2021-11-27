require('./model/db.js');


// const { Router } = require('express');
const express = require('express');

const empController = require('./controller/empcontroller.js');

const bodyParser = require('body-parser');

const app = express();




// app.set('views',path.join(__dirname,'/views/'));
// app.engine('hbs',exphbs({extname: 'hbs',defaultLayout:'mainLauout', layoutDir:__dirname + '/views/layouts'} ));
// app.set('view engine','hbs');

app.use(bodyParser.json());

app.get('/',(req,res)=> {
    console.log('TEST!')

    res.send('Hello from home page');
});

app.use('/emp',empController);



app.listen(8000,()=>{
    console.log('Express server connected succesfully at port 8000');
});
