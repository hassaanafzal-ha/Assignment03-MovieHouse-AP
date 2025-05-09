import {MongoClient} from "mongodb";
export default async function GetDirectorById(req,res)
{
    // res.status(200).json({message:"get director by id"});
    if(req.method === "GET")
    {
        try
        {
            const uri = process.env.MONGODB_URI;
            const client = await MongoClient.connect(uri);
            const database = client.db("moviesData");
            const directors = await database.collection("directors").find({}).toArray();
            const director = [];
            for(let i in directors)
            {
                director.push({id:directors[i].id,name:directors[i].name,biography:directors[i].biography});
            }
            const selectedDirector = director.find((val)=> val.id === req.query.id);
            res.status(200).json({SelectedDirector:selectedDirector})
        }
        catch(error)
        {
            console.log(error);
            res.status(500).json({message:"Error fetching director!"});
        }
    }
    else
    {
        res.status(404).json({error:"Error!"});
    }
}