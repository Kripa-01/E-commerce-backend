const express = require("express")
const authroutes = express.Router()
const usercontroller = require("../controllers/authcontroller")


authroutes.post("/signup",usercontroller.signup)
authroutes.post("/login",usercontroller.login)
module.exports=authroutes
