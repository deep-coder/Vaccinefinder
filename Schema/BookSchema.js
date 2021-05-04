import {gql} from 'apollo-server-micro';
const typeDefs = gql`
  type Library {
    branch : String!
    books: [Book!]
  }
  type Book {
    name: String
    author: Author!
  }

  type Author{
    author : String!
  }

  extend type Query {
    libraries: [Library]
  }

  extend type Mutation {
    updateBook(name: String!, author: String!): Book
  }
`;


export default typeDefs;