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
  },
  Questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question'
  }]
});

const User= mongoose.model('User', userSchema);

module.exports = User;