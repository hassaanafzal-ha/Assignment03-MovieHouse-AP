import { MongoClient } from "mongodb";
export default async function GetGenres(req,res)
{
    if(req.method === "GET")
    {
        try
        {
            const uri = process.env.MONGODB_URI;
            const client = await MongoClient.connect(uri);
            const database = client.db("moviesData");
            const genres = await database.collection("genres").find({}).toArray();
            res.status(200).json({Genres:genres});
        }
        catch(error)
        {
            console.log(error);
            res.status(500).json({error:"Error to fetch genres!"});
        }
    }
    else
    {
        res.status(404).json({error:"Error!"})
    }
}