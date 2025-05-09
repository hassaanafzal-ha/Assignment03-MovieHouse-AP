import MovieDetails from "@/components/movieDetails";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";
export async function getStaticPaths()
{
    const dataa = await fetch("http://localhost:3000/api/movies").then(res=>res.json()).catch((error)=>console.log(error))
    const dataInArr = [];
    for(let i in dataa)
    {
        dataInArr.push(...dataa[i]);
    }
    const selectedData = dataInArr.map((val)=>{return {params:{id: val.id.toString()}}});

    return{
        paths:selectedData,
        fallback:true
    }
}
export async function getStaticProps(context)
{
    const id = context.params.id;
    const dataa = await fetch("http://localhost:3000/api/movies").then(res=>res.json()).catch((error)=>console.log(error))
    if (!dataa || dataa.movies === 0) {
        return {
            notFound: true,
        };
    }

    const dataInArr = [];
    for(let i in dataa)
    {
        dataInArr.push(...dataa[i]);
    }
    const selectedData = dataInArr.find((val)=> val.id.toString() === id);

    if (!selectedData) {
        return {
            notFound: true,
        };
    }

    return {
        props:
        {
            data:selectedData
        }
    }

}
export default function MovieDetailsPage({data})
{
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading movie...</div>;
    }
    return(
        <div>
            <MovieDetails details = {data}/>
        </div>
    )
}