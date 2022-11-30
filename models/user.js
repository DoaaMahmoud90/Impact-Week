const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  UserName :{
    type: String,
    require: true,
  },
  Email:{
    type: String,
    require: true,
    unique: true
  },
  Password:{
    type: String,
    require: true,
    lowercase: true
  }
});

const User= mongoose.model('user', userSchema);

module.exports = User;