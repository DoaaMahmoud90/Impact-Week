const mongoose = require('mongoose');
const questionSchema = new mongoose.Schema({
  Title :{
    type: String,
    require: true
  },
  Description:{
    type: String,
    require: true
  },
  user_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
}, {
  timestamps:true
});

const Question = mongoose.model('question', questionSchema);

module.exports = Question;