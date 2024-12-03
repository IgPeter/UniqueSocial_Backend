const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

//dotenv variables
const api = process.env.API_URL;
const CONNECTION_STRING = process.env.CONN_STRING;

//import route files
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');


//middlewares
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(`${api}/user`, userRoutes);
app.use(`${api}/post`, postRoutes);

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