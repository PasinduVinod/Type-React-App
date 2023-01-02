import { UserRepository } from '../repository/userTS';
import { User } from '../models/userTS';
const jwt = require('jsonwebtoken');
import * as bcrypt from 'bcrypt'; 

const secret = "een2jjnJNIUEJFNSUDFJNDSnkjs"


export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(email: string, password: string): Promise<User | string> {
        const check = await this.userRepository.findUser(email);
        console.log("Repo returned: " + check);
        if (check) {
          return "User already exists";
        } else {
          const lowercaseEmail = email.toLowerCase();
          const encryPassword = await bcrypt.hash(password, 10); //hashing password
      
          const user = await this.userRepository.create(lowercaseEmail, encryPassword);  //save user details
      
          //token generation
          const token = jwt.sign({ user_id: user._id, email }, secret, {
            expiresIn: "2h",
          });
          // save user token
          user.token = token;
          return user;
        }
    }

    async LoginUser(email: string, password: string): Promise<User | string>{ //login user
        const user = await this.userRepository.findLogin(email);
        if (user && (await bcrypt.compare(password, user.password))) {
          // Create token
            const token = jwt.sign({ user_id: user._id, email }, secret, {
              expiresIn: "2h",
            });
    
          // save user token
          user.token = token;
          return user;
          // user
        }else{
          return "failed"
        }
       // res.status(400).send("Invalid Credentials");
      }
      
}