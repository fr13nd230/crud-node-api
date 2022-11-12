const mongoose = require('mongoose')
const User = require('../models/userModel')

const getShow = (req, res, done) => {

    User.find({})
        .then(users => {
            res.status(200).json(users)
            done(null , users)
        })
        .catch(err => {
            res.status(400).json({error: err.message})
            done(err)
        })

}

const getShowOne = (req, res, done) => {

    User.findOne({id:req.params.id}) // Here u can use findById but _id of mongo is big so we filter it by findByOne method
        .then(user => {
            if(!user) res.status(200).json({"message": "User not found!"})
            res.status(200).json(user)
            done(null, user)
        })
        .catch(err => {
            res.status(400).json({error: err.message})
            done(err)
        })

}

const getCreate = (req, res) => {

    var id = req.body.id
    const {name, email, nickname} = req.body
    id = Math.floor(Math.random() * 100)
    const user = new User({id, name, email, nickname})

    User.create(user)
        .then(doc => {
            res.status(200).json({message: "User Created!"})
            done(null, doc)
        })
        .catch(err => {
            res.status(400).json({error: err.message})
            done(err)
        })

}

const getUpdate = (req, res, done) => {

    const {name, email, nickname} = req.body
    User.findOneAndUpdate({id: req.params.id}, {name, email, nickname})
        .then(stat => {
            if(!stat) res.status(200).json({"message": "User not found!"})
            res.status(200).json({"message": "User updated!"})
            done(null, stat)
        })
        .catch(err => {
            res.status(400).json({error: err.message})
            done(err)
        })
        
}

const getDelete = (req, res, done) => {

    User.findOneAndDelete({id: req.params.id})
        .then(stat => {
            if(!stat) res.status(200).json({"message": "User not found!"})
            res.status(200).json({"message": "User deleted! "})
            done(null, stat)
        })
        .catch(err => {
            res.status(400).json({error: err.message})
            done(err)
        })

}

module.exports = {
    getShow,
    getShowOne,
    getCreate,
    getUpdate,
    getDelete
}