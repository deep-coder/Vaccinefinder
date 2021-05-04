import {gql} from 'apollo-server-micro';

const typeDefs = gql`
  type User{
      _id: ID!
      email: String!
      password: String!
      name: String!
  }
  input UserLoginInput{
    email: String!
    password: String!
 }

  extend type Mutation{
      loginUser(data: UserLoginInput): AuthPayload!
  }

  type AuthPayload{
      token: String!
  }
`

export default typeDefs;