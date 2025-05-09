import DirectorDetails from "@/components/directorDetails";

export async function getStaticPaths()
{
    const dataa = await fetch("http://localhost:3000/api/directors").then(res=>res.json()).catch((error)=>console.log(error))
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
    const selectedData = dataInArr.map((val)=>{return {params:{id: val.id.toString()}}});

    if (!selectedData) {
        return {
            notFound: true,
        };
    }
    return{
        paths:selectedData,
        fallback:false
    }
}
export async function getStaticProps(context)
{
    const id = context.params.id;
    const dataa = await fetch("http://localhost:3000/api/directors").then(res=>res.json()).catch((error)=>console.log(error))
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
export default function DirectorPage({data})
{
    return (
        <div>
            <DirectorDetails details = {data}/>
        </div>
    )
}