const userService = require("../services/authservice");

const signup = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({
      message: "User Created Successfully",
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.loginUser(email, password);
    res.status(200).json({ message: "user login successful" });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
module.exports = {
  signup,
  login,
};
