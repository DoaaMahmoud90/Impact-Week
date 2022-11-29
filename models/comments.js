const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
  Description:{
    type: String,
    require: true
  }
}, {
  timestamps:true
});

const Question = mongoose.model('question', questionSchema);

module.exports = Question;