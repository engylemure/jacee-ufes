const mongoose = require('mongoose')

module.exports = function () {
    mongoose.Promise = global.Promise
    const db = mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`) 
    mongoose.connection.on('error', (err) => {
        console.log('Error: could not connect to MongoDB.'.red)
    }).on('open',() => {
        console.log('Connection estabilished')
    })
    return db
}