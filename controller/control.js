const Comment = require('../models/comments')
const mongoose = require('mongoose')
const Question = require('../models/questions')

const addQuestion = (req, res) => {
    res.render('questionInsertion')
}

const postQuestion = (req, res) => {

    const question = new Question({
        Title: req.body.question,
        Description: req.body.description
    })
    question.save()
        .then( () => res.redirect('/'))
        .catch(err => console.log(err))
}


const viewQuestion = async (req, res) => {

    if (req.method == "GET"){
        question = await Question.findById({_id: req.params.id})
        comments = await Comments.find({question_id: req.params.id})
        res.render('questionDetails', {question, comments})
    }

    if (req.method == "POST"){

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
            .catch(err =>res.render('mainPage', {message:err}))
    }
}

const editQuestion = (req, res) => {
    if (req.method == "GET"){
        Question.findById({_id: req.params.id})
            .then(result => {
                render('questionModification', {result})
            })
    }
    if (req.method == "POST"){
        Question.findByIdAndUpdate({_id: req.params.id})
            .then(result => {
                const {question, description} = req.body
                result = {
                    Title: question,
                    Description: description
                }
                result.save()
                    .then(()=> res.redirect(`/question/${req.params.id}`))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }
}

const deleteComment = (req, res) => {
    Comment.findByIdAndDelete({_id: req.params.id})
        .then(()=> res.redirect('/'))
        .catch(()=> res.redirect('/', {message: 'something went wrong'}))
}

const deleteQuestion = (req, res) =>{
    Question.findByIdAndDelete({_id: req.params.id})
        .then(()=> res.redirect('/'))
        .catch(()=> res.redirect('/', {message: 'something went wrong'}))
}


module.exports = {
    postQuestion,
    viewQuestion,
    editQuestion,
    deleteComment,
    deleteQuestion,
    addQuestion
}