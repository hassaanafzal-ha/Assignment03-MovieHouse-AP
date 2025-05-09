import {MongoClient} from "mongodb";
import TrendingMovies from "@/components/trendingMovies";
export default async function GetMovieById(req,res)
{
    console.log("Response: ",req.query.id);
    // res.status(200).json({message:"get movie by id"});
    if(req.method === "GET")
    {
        try
        {
            const uri = process.env.MONGODB_URI;
            const client = await MongoClient.connect(uri);
            const database = client.db("moviesData");
            const movies = await database.collection("movies").find({}).toArray();
            const movie = [];
            for(let i in movies)
            {
                movie.push({id:movies[i].id,title:movies[i].title,directorId:movies[i].directorId,description:movies[i].description,releaseYear:movies[i].releaseYear,genreId:movies[i].genreId,rating:movies[i].rating});
                // movie.push({...movies[i]});
            }
            // console.log("MOVIES: ", movie);
            const selectedMovie = movie.find((val)=>val.id === req.query.id);
            res.status(200).json(selectedMovie);
        }
        catch(error)
        {
            console.log(error);
            res.status(500).json({message:"Error fetching movie!"});
        }
    }
    else
    {
        res.status(404).json({error:"Error!"});
    }
}