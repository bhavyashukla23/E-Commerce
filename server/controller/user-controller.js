import User from '../model/user-schema.js';

export const userSignup = async(request ,response) =>{
    try{
         const existingUser = await User.findOne({username : request.body.username});
         if(existingUser){
            return response.status(401).json({message: 'User already exists'});
         }
        const user= request.body;
        const newUser= new User(user);
        await newUser.save();

        response.status(200).json({message:user});
    }catch(error){
       response.status(500).json({message: error.message});
    }

};