
const UserService = require('../service/user');

class UserController {
  async create(req, res) {
    const {email,password} = req.body;
    console.log("You inside the controller")
    console.log("userData "+email,password )
    // userData={email,password}
    const user = await UserService.createUser(email,password);
    
    res.json(user);
  }
}

module.exports = new UserController();