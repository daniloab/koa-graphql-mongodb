const { GraphQLObjectType } = require('graphql');
const Gadget = require('../../models/gadgets')

const queryAllGadgets = require('./queryAllGadgets')
const queryGetById = require('./queryGetById')

module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        queryAllGadgets,
        queryGetById
    }
})
