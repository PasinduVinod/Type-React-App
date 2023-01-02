import { Request, Response } from 'express';
import { UserService } from '../service/userTS';

export class UserController {

    // private userService: UserService;

    // constructor() {
    // this.userService = new UserService();
    // }

    async Register(req: Request, res: Response) {
        const {email, password} = req.body;
        // check input validity
        console.log((email && password))
        if (!(email && password)) {
            res.status(400).send("Both email and password required");
        }else{
            const userService = new UserService();
            const user = await userService.createUser(email, password);
            res.json(user);
        }
    }


    async Login(req: Request, res: Response) {
        const {email, password} = req.body;
        // check input validity
        if (!(email && password)) {
            res.status(400).send("Both email and password required");
        }else{
            const userService = new UserService();
            const user = await userService.LoginUser(email, password);
            if(user !== "failed"){
                res.status(200).json(user);
            }else{
                res.status(400).send("Invalid Credentials");
            }
        }
    }
}

export const userController = new UserController();



