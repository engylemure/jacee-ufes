const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    createdAt: {
        type: Number,
        default: (new Date()).valueOf()
    }
})

const Model = mongoose.model('User', userSchema)

module.exports = Model