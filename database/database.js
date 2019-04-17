const mongoose = require('mongoose')

const initDB = () => {
    mongoose.connect(
        process.env.SECRET,
        { useNewUrlParser: true }
    )

    mongoose.connection.once('open', () => {
        console.log('connected to database')
    })
}

module.exports = initDB