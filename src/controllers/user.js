
const UserService = require('../service/user');

class UserController {
  async create(req, res) {
    const {email,password} = req.body;
    // check input validity
    if (!(email && password)) {
      res.status(400).send("Both email and password required");
    }
    
    const user = await UserService.createUser(email,password);
    
    res.json(user);
  }
}

module.exports = new UserController();