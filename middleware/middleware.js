import UserModel from "../models/User.js"

export const isAdmine=(req,res,next)=>{
try {
    const {email}=req.body;

    const userInfo= UserModel.findOne({email})
   
   if(userInfo && userInfo.role=="Admin"){
    next();
   }
   else{
     res.status(400).json({
        message:"Access Denied , only admin can Access"
     })
   }
} catch (error) {
    res.status(500).json({
    
      message:"server error"
    })
}

}