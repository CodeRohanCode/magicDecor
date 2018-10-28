const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express();

//cors error solution
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "*");
    res.header('Access-Control-Allow-Credentials', 'true')
    next();
    }); 

    //Parsers
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

const api = require('./api')


//API location
app.use('/api', api);

//set port
const port = process.env.PORT || '3000';
app.set('port', port);
app.listen(port, () => console.log(`Running on localhost: ${port}`));