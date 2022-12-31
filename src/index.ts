// import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import express from 'express';
import * as mongodb from 'mongodb';
import mongoose from 'mongoose';

// import bodyParser from 'body-parser';
const bodyParser = require('body-parser')


const UserController = require('./controllers/user');
const DataController = require('./controllers/data');

// Load environment variables from the .env file
dotenv.config();

// Set up the express app
const app = express();
app.use(bodyParser.json())

//user control routes
app.post('/register', UserController.Register); //register route 
app.post('/login',UserController.Login); //login route

//data control routes
app.post('/create',DataController.createData); //create route
app.put('/edit',DataController.editData); //edit route
app.get('/view', DataController.ViewData); //view all
app.post('/viewone', DataController.ViewOneData); //view special
app.delete('/delete/:id', DataController.Delete); //delete data

// app.post('/login', (req,res) => {
//     const {email,password} = req.body;
//     console.log(email,password)
// })

//beacause of an issue when reading process.env, used mongo url directly in index.ts
const port = process.env.PORT || 3000;
const mongoUrl = "mongodb+srv://user123:123123123@cluster0.xkikzml.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoUrl, { bufferCommands: false });
mongoose.set('strictQuery', false);
// mongoose.set('strictQuery', true);

// Connect to the MongoDB instance
mongodb.MongoClient.connect(mongoUrl, (error, client) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("MongoDB connected")

  // Start the server
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
