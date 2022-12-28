// repository.js

const mongoose = require('mongoose');
const User = require('../models/user');

class UserRepository {
    async create(email,password) {
      // perform database insert operation and return the created record
      console.log("inside the repo")
      console.log(email,password+"+++++++++++++++")
    const user = new User(email,password);
    try {
      await user.save();
      return user;
    } catch (error) {
      throw error;
    }
    }
  }
  
  module.exports = new UserRepository();
  