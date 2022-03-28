const express = require('express')
const { graphql, buildSchema } = require('graphql')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
const { State, statesDict } = require('./states')

const schema = buildSchema(`
  type Query {
    getStates(searchTerm: String): [State]
  }


  type State {
    name: String
    lat: Float
    lng: Float
  }
`)

const rootValue = {
  getStates: ({searchTerm}) => {
    return statesDict.filter(x => x.name.toUpperCase().toLowerCase().startsWith(searchTerm.toUpperCase().toLowerCase())) // TODO implement more advanced search
  },
}

const app = express()
app.use(cors())

app.use('/graphql', graphqlHTTP({
  rootValue, schema, graphiql: true
}))

app.listen(4000, () => console.log('Listening on 4000'))