import TrendingMovie from "@/components/trendingMovies";
import {useRouter} from "next/router";
import { notFound } from "next/navigation";
import DarkTheme from "@/context/darkTheme";
import ToggleButtonn from "@/components/toggleButton";
import styles from "@/components/trendingMovies.module.css";
export async function getStaticProps()
{
    const dataa = await fetch("http://localhost:3000/api/movies").then(res=>res.json()).catch((error)=>console.log(error))
    if(!dataa || dataa.movies === 0)
    {
      return {
        notFound:true
      }
    }

    return {
        props:{
            data: dataa
        },
        revalidate:60
    }
}

function Home({data})
{
    console.log("DATA",data)
    const moviesarr = [];
    const router = useRouter();
    for (let i in data)
    {
        moviesarr.push(...data[i]);
    }
    const redirectToGenre= ()=>
    {
        router.push("/genres");
    }
    return(
        <div>
            <div className = {styles.logo}>MovieHub</div>
            <div>
                <ToggleButtonn/>
            </div>
            <div>
                <TrendingMovie movies = {moviesarr} click = {redirectToGenre}/>
            </div>
        </div>
    )
}

export default Home;