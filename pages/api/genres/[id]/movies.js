import { MongoClient } from "mongodb";
export default async function GetovieByGenre(req,res)
{
    // res.status(200).json({message:"get movie by genre"});
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
            }
            // const selectedMovies = movie.find((val)=>val.genreId === req.query.id);
            const selectedMovies = [];
            for(let i in movie)
            {
                if(movie[i].genreId === req.query.id)
                {
                    selectedMovies.push({id:movies[i].id,title:movies[i].title,directorId:movies[i].directorId,description:movies[i].description,releaseYear:movies[i].releaseYear,genreId:movies[i].genreId,rating:movies[i].rating});
                }
            }
            res.status(200).json(selectedMovies);
        }
        catch(error)
        {
            console.log(error);
            res.status(500).json({message:"Error fetching movies by genre!"});
        }
    }
    else
    {
        res.status(404).json({error:"Error!"});
    }
}