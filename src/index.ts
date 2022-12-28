// import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import express from 'express';
import * as mongodb from 'mongodb';
import mongoose from 'mongoose';

// import bodyParser from 'body-parser';
const bodyParser = require('body-parser')


const UserController = require('./controllers/user');

// Load environment variables from the .env file
dotenv.config();

// Set up the express app
const app = express();
app.use(bodyParser.json())


app.post('/register', UserController.create);
// app.post('/login', (req,res) => {
//     const {email,password} = req.body;
//     console.log(email,password)
// })

const port = process.env.PORT || 3000;
const mongoUrl = "mongodb+srv://user123:123123123@cluster0.xkikzml.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoUrl, { bufferCommands: false });

// Connect to the MongoDB instance
mongodb.MongoClient.connect(mongoUrl, (error, client) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("MongoDB connected")
  // Set up routes and middleware here

  // Start the server
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
