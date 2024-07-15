// server.js

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const path=require("path");

const port = 4000; // Choose any port you like
const routes = require('./routes/routes');

// Middleware to parse JSON bodies
app.use(express.json());

const mongoose = require('mongoose');

app.use(cors({origin: '*'}));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(cors());
app.use(bodyParser.json());
const connectionString = 'mongodb+srv://admin1:Usama786.@cluster0.iykqmyl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB connection string

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});

// Use the routes defined in routes.js
app.use('/api', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
