const userService=require("../services/authservice")


const signup = async (req,res) => {
    try {
        const user = await userService.createUser(req.body)
        res.status(201).json({
            message:"User Created Successfully",
            data:user
        })
    } catch (err) {
        res.status(400).json({
            message:err.message
        })

        
    }
    
}
const login = async (re)
module.exports={
    signup
    login
}