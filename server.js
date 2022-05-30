const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const connectDB = require('./server/database/connection');

const app = express();

// Getting PORT variable
dotenv.config({ path : 'config.env' })
const PORT = process.env.PORT || 8080;



// Log request 
app.use(morgan('tiny'));

// Parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}));

//MongoDB connection
connectDB();

// Set view engine
app.set("view engine", "ejs");

// Load routers
app.use('/', require('./server/routes/router'));

app.listen(PORT, () => {console.log(`Application is running on http://localhost:${PORT}`);})