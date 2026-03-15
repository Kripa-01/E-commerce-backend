require("dotenv").config()
const express = require("express");
const authroutes = require("./src/users/routers/authroutes");
const connectDB = require("./src/config/db");
const app = express();
const PORT = 5000;
connectDB()
app.use(express.json())
app.use("/api/users", authroutes)

app.get("/", (req, res) => {
  res.send("Hello from Express Server 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});