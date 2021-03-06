require('now-env')
const mongoose = require('mongoose')

const initDB = () => {
    mongoose.connect(
        process.env.secret,
        { useNewUrlParser: true }
    )

    mongoose.connection.once('open', () => {
        console.log('connected to database')
    })
}

module.exports = initDB