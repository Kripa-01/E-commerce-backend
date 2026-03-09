const User = require("../models/userschema")


const createUser = async(userdata)=>{
    const user = await User.create(userdata)
    return user
}
const loginUser = async(userdata)=>{
    const user = await User.login(userdata)
    return user
}
module.exports={
    createUser,
    loginUser
}