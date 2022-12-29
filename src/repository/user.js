// repository.js

const mongoose = require('mongoose');
const User = require('../models/user');

class UserRepository {
  async findUser(Email) {
    const userc = await User.findOne({ email: Email });
    if (userc) {
      return "Failed";
    } else {
      return "Success";
    }
  }
    async create(email,password) {
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
  