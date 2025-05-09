import { MongoClient } from "mongodb";
export default async function GetMovies(req, res)
{
    if (req.method === "GET") 
    {
        try 
        {
            const uri = process.env.MONGODB_URI;
            const client = await MongoClient.connect(uri);
            const database = client.db("moviesData");
            const movies = await database.collection("movies").find({}).toArray();
            // console.log("movies", movies);
            res.status(200).json({Movies: movies});
        }
        catch (error) 
        {
            console.log(error);
            res.status(500).json({ error: "Movies not fetched!" });
        }
    }
    else 
    {
        res.status(404).json({ error: "Error!" })
    }
}