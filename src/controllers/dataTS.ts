import { Request, Response } from 'express';
import {DataService} from '../service/dataTS';
import {Auth} from '../Middlewares/Auth'

export class DataController{
    private auth: Auth;
    constructor() {
        this.auth = new Auth();
    }
    async createData(req: Request, res: Response) {
        // Get the token from the request header
        const token = req.header('Authorization');
    
        // If there is no token, return an error
        if (!token) {
           return res.status(401).json({ message: 'Unauthorized' });
        }else{
            try{
            // Verify the token
                const user = await this.auth.verifyToken(token);
                // console.log("User: "+user);
                const uid = user._id;
                const {Age} = req.body;
            // check input validity
                if (!(Age)) {
                    res.status(400).send("Age required");
                }else{
                    const dataServise = new DataService;
            //call createData function
           
            
                    const data = await dataServise.createData(uid,Age); 
            
                    res.json(data);
                }
            }catch(error){
                res.json({message:"Error in authenticatoin"})
            }
        }
    }
    
    async editData(req: Request, res: Response) {
        // Get the token from the request header
        const token = req.header('Authorization');
    
        // If there is no token, return an error
        if (!token) {
           return res.status(401).json({ message: 'Unauthorized' });
        }else{
            try{
            // Verify the token
                const user = await this.auth.verifyToken(token);
                // console.log("User: "+user);
                const uid = user._id;
                const {id,Age} = req.body;
            // check input validity
                if (!(Age)) {
                    res.status(400).send("Age required");
                }else{
            //call createData function
                    try{
                        const dataServise = new DataService;
                        const data = await dataServise.editData(id,uid,Age); 
                        res.json(data);
                    }catch(error){
                        console.log("Error in function call")
                    }
                }

            }catch(error){
                res.json({message:"Error in authenticatoin"})
            }
        }
    }
    
    async ViewData(req: Request, res: Response){
        const token = req.header('Authorization');
    
        // If there is no token, return an error
        if (!token) {
           return res.status(401).json({ message: 'Unauthorized' });
        }else{
            try{
        // Verify the token
            const user = await this.auth.verifyToken(token);
            // console.log("User: "+user);
            const uid = user._id;
        //call createData function
            try{
                const dataServise = new DataService;
              const data = await dataServise.FindData(uid); 
              res.json(data);
            }catch(error){
              console.log("Error in function call")
            }
            
            }catch(error){
                res.json({message:"Error in authenticatoin"})
            }
        }
    }
    
    async ViewOneData(req: Request, res: Response){
        const token = req.header('Authorization');
    
        // If there is no token, return an error
        if (!token) {
           return res.status(401).json({ message: 'Unauthorized' });
        }else{
            try{
        // Verify the token
            const user = await this.auth.verifyToken(token);
            const {id} = req.body;
            const uid = user._id;
        // check input validity
            if (!(id)) {
              res.status(400).send("id required");
            }
        //call createData function
            try{
                const dataServise = new DataService;
              const data = await dataServise.FindSpecial(id,uid); 
              res.json(data);
            }catch(error){
              console.log("Error in function call")
            }
            
            }catch(error){
                res.json({message:"Error in authenticatoin"})
            }
        }
    }
    
    async Delete(req: Request, res: Response){
        const token = req.header('Authorization');
    
        // If there is no token, return an error
        if (!token) {
           return res.status(401).json({ message: 'Unauthorized' });
        }else{
            try{
            // Verify the token
                const user = await this.auth.verifyToken(token);
                const id = req.params.id;
            //call createData function
                    const dataServise = new DataService;
                    const data = await dataServise.DeleteData(id); 
                    res.json(data);
                

            }catch(error){
                res.json({message:"Error in authenticatoin"})
            }
        }
    }
      
}