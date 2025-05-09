import MoviesDisplay from "@/components/movies";
import { notFound } from "next/navigation";
export async function getStaticProps()
{
    const dataa = await fetch("http://localhost:3000/api/movies").then(res=>res.json()).catch((error)=>console.log(error))
    if(!dataa || dataa.movies===0)
    {
      return {
        notFound:true
      }
    }

    const dataInArr = [];
    for(let i in dataa)
    {
        dataInArr.push(...dataa[i]);
    }

    return {
        props:
        {
            data:dataInArr
        },
        revalidate:60
    }
 

}

export default function MoviesPage({data})
{
    return(
        <div>
           <MoviesDisplay details = {data}/>
        </div>
    )
}