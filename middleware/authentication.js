const questionModel = require('../models/questions');
const checkToken = (req,res, next) => {
    if(req.header('cookie')){
      next();
    }
    else{
    res.redirect('/')
    }
}


const checkStatus = (req,res, next) => {
  if(!req.header('cookie')){
    next()
  }
  else{
    questionModel.countDocuments({},(err, count) => {
      if(count == 0)
      {
        res.render('mainPage', {
          message: 'There are no questions',
          status: "loggedIn"
        })
      }else{
        res.render('mainPage', {
          message: `There are ${count} questions`,
          status: "loggedIn"
        })
           }
    })
  }
}


module.exports = {checkToken, 
  checkStatus}