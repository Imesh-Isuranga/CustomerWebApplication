const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

require('dotenv').config();

const port = process.env.PORT;

const CustomerRoute = require('./route/CustomerRoute');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/Thogakade').then(()=>{
   app.listen(port,()=>{
      console.log('Thogakade Service up and running on port number ${port}')
   });
}).catch(error=>{

})

app.use('/api/v1/customer',CustomerRoute);




/*
app.get("/test",(req ,response)=>{
    response.send({'status':'Success!'})
});*/
