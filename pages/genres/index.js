import GenreDetails from "@/components/genres";
export async function getServerSideProps()
{
    const dataa = await fetch("http://localhost:3000/api/genres").then(res=>res.json()).catch((error)=>console.log(error))
    if (!dataa || dataa.genres === 0) {
        return {
            notFound: true,
        };
    }
    
    const dataInArr = [];
    for(let i in dataa)
    {
        dataInArr.push(...dataa[i]);
    }
    return {
        props:{
            data:dataInArr
        }
    }
}
export default function Genres({data})
{
    return(
        <div>
            <GenreDetails details = {data} />
        </div>
    )
}