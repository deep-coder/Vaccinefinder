import { ApolloServer, gql } from "apollo-server-micro";
import schemas from '../../Schema';
import resolvers from '../../resolvers';
import {connectToDatabase} from '../../util/mongodb.js';



const server = new ApolloServer({ 
  typeDefs: schemas, 
  resolvers,
  context: async ({req,res}) => {
    const {db} = await connectToDatabase();
    return {
      db,
      req,
      res
    }
  }
});

const handler = server.createHandler({ path: "/api/graphql" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;