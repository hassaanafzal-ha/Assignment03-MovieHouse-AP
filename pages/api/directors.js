import {MongoClient} from "mongodb";
export default async function GetDirectors(req,res)
{
    if(req.method === "GET")
    {
        try
        {
            const uri = process.env.MONGODB_URI;
            const client = await MongoClient.connect(uri);
            const database = client.db("moviesData");
            const directors = await database.collection("directors").find({}).toArray();
            res.status(200).json({Directors:directors});
        }
        catch(error)
        {
            console.log("Error",error);
            res.status(500).json({message:"Error to fetch directors!"});
        }
    }
    else
    {
        res.status(404).json({error:"Error!"});
    }
}