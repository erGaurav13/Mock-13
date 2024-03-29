const express = require("express");
const User = require("../User.Schema/users.schema");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const userRouter = express.Router();

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send({
        message: "Invalid-Creadential",
        token: "",
      });
    }
    const ismatch = await bcrypt.compare(password, user.password);
    if (user && ismatch) {
      //generate token
      const token = jwt.sign(
        { id: user._id, email: user.email },
        "SECRET1234",
        {
          expiresIn: "10 day",
        }
      ); //this secrete is for signing purpose say that it is valid or not
      // const refreshToken = jwt.sign({}, "REFRESHSECRET", { expiresIn: "28 day" });
      return res.send({
        message: "login succesfull",
        token: token,
        user
      });
    }
    return res.status(402).send("Invalid  credential ");
  } catch (e) {
    return res.send(e);
  }
});

userRouter.post("/signup", async (req, res) => {
  const { email, password,fullname } = req.body;
 
  try {
    let existingUser = await User.findOne({ email });
    
    if (existingUser) {
    
      return res.status(402).send({ message: "userRegistered already" });
    } else {
      const hashPassword = await bcrypt.hash(password, saltRounds);
        
      let result =  email.toLowerCase().includes("@masaischool.com")
     if(result ){
      let user = await User.create({
        email,
        fullname,
        role:"admin",
        password: hashPassword,
      });
      return  res.send({ message: "Sucessfully created" });
     }else{
      let user = await User.create({
        email,
        fullname,
        password: hashPassword,
      });
      return  res.send({ message: "Sucessfully created" });
     }
       
     
    }
  } catch (e) {
    res.status(404).send(e);
  }
});


userRouter.get("/login/:id", async (req, res) => {
  try{
    let id = req.params.id;
    let user = await User.find({ _id: id });
    res.send(user);
  }catch(e){
   res.send(e)
  }

});

module.exports = userRouter;
