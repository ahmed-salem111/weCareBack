import mongoose from "mongoose";




 export const   dbConnection=async()=>{
    return await mongoose.connect('mongodb+srv://wecare:wecare123@cluster0.wy0n1uc.mongodb.net/weCare1').then((result)=>{
        console.log(" database connected")
    }).catch((err)=>{
        console.log("database erorr",err);
    })
}
