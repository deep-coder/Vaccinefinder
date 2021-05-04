import {gql} from "apollo-server-micro";
const typeDefs = gql`
type IMDBRating {
    rating: Float
    votes: Int
    id: Int
}
 type Movie {
     _id: ID!
     plot: String
     poster: String
     imdb: IMDBRating
     title: String
 }

 type pageInfo {
    endCursor : ID
    hasNextPage : Boolean
  }

  type edges{
      cursor : ID
      node: [Movie]
  }

 type MovieCollection{
     pageInfo: pageInfo
     edges: edges
 }

 extend type Query {
     movies(offset: Int, limit: Int, cursor: ID) : MovieCollection
     movie(_id: ID!): Movie
 }

 extend type Mutation {
     updateMovie(title: String!): Movie
 }
`

export default typeDefs;


