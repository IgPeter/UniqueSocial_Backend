const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//dotenv variables
const api = process.env.API_URL;
const CONNECTION_STRING = process.env.CONN_STRING;

const userRouter = require('./routes/user');


//middlewares
app.use(bodyParser.json());
app.use(`${api}/user`, userRouter);


//install mongoose
//connect database here
mongoose.connect(CONNECTION_STRING).then(() => {
    console.log("Database connection is successful");
}).catch((err)=> {
    console.log(err);
})


//starting my server
app.listen(3000, () => {
    console.log(api);
    console.log('Server is running at localhost port 3000');
})