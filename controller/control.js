const Comment = require('../models/comment')
const mongoose = require('mongoose')
const Question = require('../models/question')

// Render add Question page
const addQuestion =async  (req, res) => {
    comments = await Comment.find()
    console.log(comments)
    res.render('questionInsertion')
}

// Post question from Add page
const postQuestion = (req, res) => {

    const question = new Question({
        Title: req.body.question,
        Description: req.body.description
    })
    question.save()
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
}


// View One question and add Comments
const viewQuestion = (req, res) => {

    if (req.method == "GET"){
        Question.findById({_id: req.params.id})
            .populate({path:'Comment'})
            .then(result => {
                console.log(result)
                res.render('questionDetails', {question: result})
            })
            .catch( err => console.log(err))
    }

    // Add Comments
    if (req.method == "POST"){
        const newComment = new Comment ({
            Description: req.body.comment,
            // Get user Id from cookie
            // user_id: user.id,
            Question: req.params.id
        })
        console.log(newComment)
        newComment.save()
            .then(() => {
                message = "Your comment has been posted"
                res.render('questionDetails', {question: 'test'})
            })
            .catch(err => res.redirect('/', {message:err}))
    }
}

// Edit a Question
const editQuestion = (req, res) => {
    if (req.method == "GET"){
        Question.findById({_id: req.params.id})
            .then(result => {
                res.render('questionModifiation', {question: result})
            })
    }
    if (req.method == "POST"){
        Question.findByIdAndUpdate({_id: req.params.id})
            .then(result => {
                const {question, description} = req.body
                result.Title = question
                result.Description= description
                result.save()
            })
                .then(()=> res.redirect(`/question/${req.params.id}`))
                .catch(err => console.log(err))
            .catch(err => console.log(err))
    }
}


// tribute to DELETE
const deleteComment = (req, res) => {
    Comment.findByIdAndDelete({_id: req.params.id})
        .then(()=> res.redirect('/'))
        .catch(()=> res.redirect('/', {message: 'something went wrong'}))
}

const deleteQuestion = (req, res) => {
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