// import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import express from 'express';
import * as mongodb from 'mongodb';
import mongoose from 'mongoose';
// const env = require('./types/environment');

// import bodyParser from 'body-parser';
const bodyParser = require('body-parser')

const UserController = require('./controllers/userTS').UserController;
const DataController = require('./controllers/dataTS').DataController;

const cors = require('cors');
// const UserController = require('./controllers/userTS');

// const DataController = require('./controllers/data');

// Load environment variables from the .env file
dotenv.config();

// console.log(env.PORT)

// Set up the express app
const app = express();
app.use(bodyParser.json())

app.use(cors());


const userController = new UserController();
const dataController = new DataController();

//user control routes
app.post('/register', (req, res) => {
  userController.Register(req, res);
}); //register route 
app.post('/login', (req, res) => {
  userController.Login(req, res);
}); //login route

//data control routes
app.post('/create', (req, res) => {
  dataController.createData(req, res);
}); 
app.put('/edit', (req, res) => {
  dataController.editData(req, res);
}); 
app.get('/view', (req, res) => {
  dataController.ViewData(req, res);
}); 
app.post('/viewone', (req, res) => {
  dataController.ViewOneData(req, res);
}); 
app.delete('/delete/:id', (req, res) => {
  dataController.Delete(req, res);
}); 

//beacause of an issue when reading process.env, used mongo url directly in index.ts
const port = process.env.PORT || 5001;
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
