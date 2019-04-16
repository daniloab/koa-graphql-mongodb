const { GraphQLObjectType, GraphQLString } = require('graphql')
const gadgetGraphQLType = require('./types/gadgetType')
const Gadget = require('./../models/gadgets')

const AddGadget = require('./mutations/addGadget')
const UpdateGadget = require('./mutations/updateGadget')
const RemoveGadget = require('./mutations/removeGadget')

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        AddGadget,
        UpdateGadget,
        RemoveGadget
    }
})

module.exports = Mutation