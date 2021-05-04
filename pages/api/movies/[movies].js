import { connectToDatabase } from '../../../util/mongodb.js';
import {ObjectId} from 'mongodb';

export default async function handler(req,res) {
    const {movies} = req.query;
    console.log("Movies",movies);
    const {db} = await connectToDatabase();
    var o_id = new ObjectId(movies);
    console.log("Object", o_id);
    const moviesArray = await db.collection("movies").find({}).limit(20).toArray();
    res.json(moviesArray);
}