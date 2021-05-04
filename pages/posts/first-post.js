import Head from 'next/head'
import Layout from '../../components/Layout';
import { connectToDatabase } from '../../util/mongodb';

export default function FirstPost({movies}) {
    return <Layout>
    <Head>
        <title>First Post</title>
    </Head>
        <div>{movies.map(v => {
           return  <div>{v.title}</div>
        })}</div>
    </Layout>
  }


  export async function getStaticProps(context){
    const {client} = await connectToDatabase();
    const {db} = await connectToDatabase();
    const isConnected = await client.isConnected();
    const moviesArray = await db.collection("movies").find({}).limit(20).toArray();
  
    return {
      props: {isConnected, movies: JSON.parse(JSON.stringify(moviesArray))}
    }
  }