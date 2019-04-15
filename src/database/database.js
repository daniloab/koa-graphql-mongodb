const mongoose = require('mongoose')

const initDB = () => {
    mongoose.connect(
        'mongodb://danassis:daniloe3r4tkd@ds239936.mlab.com:39936/first-koa-graphql-mongodb',
        { useNewUrlParser: true }
    )

    mongoose.connection.once('open', () => {
        console.log('connected to database')
    })
}

module.exports = initDB