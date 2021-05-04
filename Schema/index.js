import MovieSchema from './MoviesSchema';
import BookSchema from './BookSchema';
import UserSchema from './UserSchema';
import {gql} from 'apollo-server-micro';

const linkSchema = gql`
  type Query{
      _: Boolean
  }
  type Mutation{
      _:Boolean
  } 
`;
export default [linkSchema,BookSchema, MovieSchema, UserSchema];