const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema(
  {
    
    
    phone: { type: Number, required: true },
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Login = mongoose.model("login", loginSchema);

module.exports = Login;