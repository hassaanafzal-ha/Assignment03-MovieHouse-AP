import { MongoClient } from "mongodb";
export default async function GetGenreById(req,res)
{
    // res.status(200).json({message:"get genre by id"});
     if(req.method === "GET")
     {
         try
         {
            const uri = process.env.MONGODB_URI;
            const client = await MongoClient.connect(uri);
             const database = client.db("moviesData");
             const genres = await database.collection("genres").find({}).toArray();
             const genre = [];
             for(let i in genres)
             {
                 genre.push({id:genres[i].id,name:genres[i].name});
             }
             const selectedGenre = genre.find((val)=> val.id === req.query.id);
             res.status(200).json({SelectedGenre:selectedGenre})
         }
         catch(error)
         {
             console.log(error);
             res.status(500).json({message:"Error fetching genre!"});
         }
     }
     else
     {
         res.status(404).json({error:"Error!"});
     }
}