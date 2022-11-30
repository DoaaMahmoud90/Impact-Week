const Comment = require('../models/comments')
const Question = require('../models/questions')

const postQuestion = (req, res) => {

    if (req.method=="GET"){
        res.render('questionInsertion')
    }

    if (req.method=="POST"){

        const newQuestion = {
            title: req.body.title,
            description: req.body.description,
            // Get user Id from cookie
            user_id: user.id
        }
        Question.save(newQuestion)
        .then(res => {
            message = "Your question has been posted"
            res.render('homepage', {message})
        })
        .catch(err => res.render('mainPage', {message:err}))
    }
}

const postComment = (req, res) => {
    const newComment = {
        description: req.body.description,
        // Get user Id from cookie
        user_id: user.id,
        question_id: req.params.id
    }

    Comment.save(newComment)
        .then(res => {
            message = "Your comment has been posted"
            console.log("comment saved")
            res.render('homepage', {message})
        })
        .catch(err =>console.log('comment error'), res.render('mainPage', {message:err}))
}

module.exports = {
    postQuestion,
    postComment
}