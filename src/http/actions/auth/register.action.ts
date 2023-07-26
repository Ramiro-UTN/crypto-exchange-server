import bcrypt from "bcrypt";
import User from '../../../domain/models/User';
import {Request, Response} from 'express';

class RegisterAction {
  async run (req: Request, res: Response){
    try{
      const { userName, email, password } = req.body;
  
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
  
      const newUser = new User({
        userName,
        email,
        password: passwordHash
      });
  
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
  
    } catch(err){
      res.status(500).json({error: err.message});
    }
  }
}



export default new RegisterAction();