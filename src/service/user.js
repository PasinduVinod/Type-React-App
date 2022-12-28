const UserRepository = require('../repository/user');
const User = require('../models/user');


class UserService {
    async createUser(email,password) {
    
     console.log("you inside the service"); 
     const user = await UserRepository.create({email,password});
    
     console.log(user)
     return user;
   
    }
  }
  
  module.exports = new UserService();
  