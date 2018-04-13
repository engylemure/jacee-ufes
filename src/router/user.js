const express = require('express')
const router = express.Router()
const User = require('../models/user')
const _ = require('lodash')

const create = async function(req, res) {
    const userParams = req.body
    if(!_.isEmpty(userParams)){
        const createdUser = await User.create(userParams)
        res.json(createdUser).status(201)
    } else {
        res.json({message: 'erro'})
    }
    
}
router.post('',create)

const update = async function(req, res) {
    const {id} = req.params
    const userParams = req.body
    const user = await User.findByIdAndUpdate(id,userParams)
    res.json(user).status(201)
}
router.put('/:id', update)

const remove = async function(req, res) {
    const {id} = req.params
    const user = await User.findByIdAndRemove(id)
    res.json(user).status(204)
}
router.delete('/:id', remove)

const index = async function(req, res) {
    const users = await User.find()
    res.json(users).status(200)
}
router.get('', index)

const view = async function(req, res) {
    const {id} = req.params
    const user = await User.findById(id)
    res.json(user).status(200)
}
router.get('/:id', view)

module.exports = {
    router,
    index,
    view,
    create,
    update,
    remove
}
