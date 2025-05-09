import styles from "@/components/genres.module.css";
import Link from "next/link";
export default function GenreDetails(props)
{
    if (!props.details || props.details === 0 ) {
        return;
    }
     return (<div className = {styles.display}>
        Genres 
        <div>
            {props.details.map((val)=>
            <div className = {styles.genres} key = {val.id}>
                <Link href = {"/genres/" + val.id} className = {styles.linkColor}><div>
                Id: {val.id}
                </div></Link>
                <div>
                Name: {val.name}
                </div>
                </div>
            )}
        </div>
    </div>)
}