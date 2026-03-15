const User = require("../models/userschema")



const createUser = async(userdata)=>{
    const user = await User.create(userdata)
    return user
}
const loginUser = async(email,password)=>{
    const user = await User.findOne(email)
    if(!user){
        throw Error("User Not Found")
    }
    if(password!==user.password){
         throw Error("Invalid Password")
    }
      
    return user
}
module.exports={
    createUser,
    loginUser
}
