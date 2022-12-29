const UserRepository = require('../repository/user');
const User = require('../models/user');


class UserService {

    async createUser(email,password) {
     const Email=email;
     const check = await UserRepository.findUser(Email);
     console.log("REpo returned: "+check)
     if(check != "Success"){
      return "User already exists"
     }else{
      const user = await UserRepository.create({email,password});
      console.log("create method called in service")
      return user;
     }
     
    }

  }
  
  module.exports = new UserService();
  