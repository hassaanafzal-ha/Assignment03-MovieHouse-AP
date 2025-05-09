import { useEffect, useState } from "react";
import useSWR from "swr";
import Directors from "@/components/directors";

export default function DirectorsPage()
{
    const fetcher = (url) =>  fetch(url).then((res) => res.json());
   
    const [director, setDirector] = useState("");
    const [moviesDirected,setMoviesDirected] = useState([]);
    const {data:directorsData,error:directorsError} =  useSWR('/api/directors',fetcher);
    const {data:moviesData,error:moviesError} =  useSWR('/api/movies',fetcher);
    function fetchDirectorData  (directorsData,moviesData) {
        if (!directorsData || !moviesData) return;
        const dataInArr = [];
        for(let i in directorsData)
        {
            dataInArr.push(...directorsData[i]);
        }
        const moviesDirectedd = [];
        
        for(let i in moviesData)
        {
            moviesDirectedd.push(...moviesData[i]);
        }
        setDirector(dataInArr);
        setMoviesDirected(moviesDirectedd);
    }
   
    useEffect(()=>{
        fetchDirectorData(directorsData,moviesData);
        console.log("Directors data error:", directorsError);
        console.log("Movies data error:", moviesError);
    },[directorsData,moviesData])
 
    return (
        <div>

            <Directors details = {director} moviesDirected = {moviesDirected}/>
        </div>
    )
}