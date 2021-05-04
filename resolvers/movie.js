import {ObjectID} from 'mongodb';
const resolvers = {
    Query :{
        movies: async (parent,{offset,limit,cursor},{db,req}) => {
            //const {db} = await connectToDatabase();
            let count = await db.collection("movies").countDocuments();
            console.log(req.headers);
            let moviesArray= [];
            if(cursor){
                const last_id = new ObjectID(cursor);
                moviesArray = await db.collection("movies").find({'_id': {'$gt': last_id}}).limit(limit).toArray();
            }
            else{
                moviesArray = await db.collection("movies").find({}).limit(limit).toArray();
            }
            let {_id: lastCursor} = moviesArray[moviesArray.length-1]
            return {pageInfo:{endCursor: lastCursor,hasNextPage: true}, edges: { cursor: lastCursor, node: moviesArray}};
        },
        movie: async (parent,{_id},{db}) => {
            //const {db} = await connectToDatabase();
            console.log("db",db)
            const oid = new ObjectID(_id);
            const movie = await db.collection("movies").findOne({"_id": oid});
            return movie;
        }
    }
}

export default resolvers;