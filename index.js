require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

//import routes
const authRoute = require("./routes/auth");
const postRoute = require('./routes/posts');


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

//connect to DB 
mongoose.connect(process.env.DB_CONNECT, () => console.log("Connected to DB"));

//middleware
app.use(express.json());

//Router middlewares
app.use('/api/user/', authRoute);
app.use('/api/posts', postRoute);

app.listen(3000, () => console.log("Server is running on port 3000"));
