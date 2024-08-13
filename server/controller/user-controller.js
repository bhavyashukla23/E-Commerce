import User from '../model/user-schema.js';

export const userSignup = async(req ,res) =>{
    try{
         const existingUser = await User.findOne({username : req.body.username});
         if(existingUser){
            return res.status(401).json({message: 'User already exists'});
         }
        const user= req.body;
        const newUser=User(user);
        await newUser.save();

        res.status(200).json({message:user});
    }catch(error){
       res.status(500).json({message: error.message});
    }

};