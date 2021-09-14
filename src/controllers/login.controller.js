const express = require("express");

const router = express.Router();

const Login = require("../models/login.model");

router.get("/login", function (req, res) {
 return res.render("login/login") 
  
});

router.post("", async function (req, res) {
  
    const user = await Login.create({
      "phone": req.body.uname,
      
    });
   
    res.render("login/login_page");
    return res.send(user);
  });
  
//   router.get("", async function (req, res) {
//     const user = await Login.find().lean().exec();
//     return res.send(user);
//   });
  
  module.exports = router;