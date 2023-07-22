import {Request, Response} from 'express';
import User from '../../../domain/models/User';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class LoginAction {
  async run (req: Request, res: Response){
    try{

      const {userName, password} = req.body;
      const user = await User.findOne({userName: userName}).lean();
      if(!user){
        throw new Error('Invalid username')
      }

      try{
        
        if(!user.password){
          throw new Error('password field is empty')
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) throw new Error('invalid credentials.');
  
        try{
  
          const token = jwt.sign({id: user._id}, process.env.JWT_SECRET || '');
          delete user.password;
          console.log(user);
          res.status(200).json({token, user});
  
  
  
        }catch(err){
          res.status(500).json({error: err.message});
  
        }
  
      }catch(err){
        res.status(400).json({message: "invalid credentials"});
      }
  
    }catch(err){
      res.status(400).json({message: "The user doesn't exists."});
    }
  }

}

export default new LoginAction();