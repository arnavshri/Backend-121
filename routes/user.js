const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

router.post("/signup", async (req, res) => {
  try {
    const { email, name, password } = req.body;
    
    const salt = bcrypt.genSaltSync(6);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      name,
      email,
      password: hash,
    });
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User Signup Successfull",
    });
  } catch (err) {
    console.log(err.message);
    res.json({
      success: false,
      message: "Something Went Wrong",
    });
  }
});

router.post("/login", async (req,res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.json({
                success: false,
                message: "User Not Found"
            })  
        }
        let check = await bcrypt.compare(password, user.password)
        if(!check){
            return res.json({
                success: false,
                message: "Invalid Credentials"
            })  
        }
        const token = jwt.sign({user},"ThisSiSuoersjdflkaj", {expiresIn:"10h"})
        console.log(token)
        res.json({
            success: true,
            token,
            message: "User Logged In Successfully"
        })
    }catch(err){
        console.log(err.message)
        res.json({
            success: false,
            message: "Something went Wrong"
        })
    }
})



router.get("/", async(req,res)=>{
    const users = await User.find();
    res.json({
        success: true,
        users
    })
})

module.exports = router;
