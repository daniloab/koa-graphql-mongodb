require('dotenv').config()
const Koa = require('koa')

const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const schema = require('./graphql/schema');
const cors = require('@koa/cors')

const initDB = require('./database/database')

initDB()

const app = new Koa()
app.use(cors())
app.listen(process.env.PORT || 9000)

app.use(mount('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
})))


app.on('error', err => {
    log.error('server error', err)
})

