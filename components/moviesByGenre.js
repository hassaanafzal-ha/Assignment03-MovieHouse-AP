import styles from "@/components/moviesByGenre.module.css";
export default function MoviesByGenre(props)
{
    console.log(props.details);
    if (!props.details || props.details === 0) {
        return;
    }
    return (<div className = {styles.display}>
        Movies By Genre
        <div className = {styles.genre}>
        Genre: {props.genre}
            {props.details.map((val)=>
            <div className = {styles.movieDetails} key = {val.id}>
               
                <div>
                Id: {val.id}
                </div>
                <div>
                Title: {val.title}
                </div>
                <div>
                Director Id: {val.directorId}
                </div>
                <div>
                Description : {val.description}
                </div>
                <div>
                Release Year: {val.releaseYear}
                </div>
                </div>)}
        </div>
    </div>)
}