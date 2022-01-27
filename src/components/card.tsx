import {CgWebsite} from 'react-icons/cg'
import {Movie} from '../interfaces'
import classes from './card.module.css'

interface CardProps {
    data:Movie;
    onSelectMovie:(movieId:number)=>void
}

const Card:React.FC<CardProps> = ({data, onSelectMovie}) => {
    return (
        <div className={classes.card} onClick={()=>onSelectMovie(data.id)}>
            <div className={classes.image}>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path}`} alt={data.title}/>
                <div className={classes.detailIcon}>
                    <CgWebsite/>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.title}><h2>{data.title}</h2></div>
                <div className={classes.release_data}>{data.release_date}</div>
                <div className={classes.genres}>{data.genre_ids.join(', ')}</div>
                <div className={classes.popularity}>{data.popularity} pts</div>
            </div>
        </div>
    )
}

export default Card