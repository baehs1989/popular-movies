import {BiMessageSquareDetail} from 'react-icons/bi'
import {Movie} from '../interfaces'
import classes from './card.module.css'

interface CardProps {
    data:Movie
}

const Card:React.FC<CardProps> = ({data}) => {
    return (
        <div className={classes.card}>
            <div className={classes.image}>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path}`}/>
                <div className={classes.detailIcon}>
                    <BiMessageSquareDetail/>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.title}><h2>{data.title}</h2></div>
                <div className={classes.release_data}>{data.release_date}</div>
                <div className={classes.popularity}>{data.popularity} pts</div>
            </div>
        </div>
    )
}

export default Card