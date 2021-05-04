import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import { relayStylePagination } from "@apollo/client/utilities";
import {BookInfo} from '../components/BookInfo';

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql',
  cache : new InMemoryCache()
})
const Home = () => {
  return (
    <>
        <div>This is home</div>
        <BookInfo />
        </>
  )
}

export default Home;