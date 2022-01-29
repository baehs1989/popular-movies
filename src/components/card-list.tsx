import Card from "./card"
import { Movie } from "../interfaces"
import classes from './card-list.module.css';

interface CardListProps {
    onSelectItem:(movieId:number)=>void,
    data:Movie[]
}

const CardList:React.FC<CardListProps> = ({onSelectItem, data}) => {

    return (
        <div className={classes.wrapper} data-test='card-list-component'>
            <div className={classes.card_list}>
                {
                    data.map(movie=>{
                        return <Card key={movie.id} data={movie} onSelectMovie={onSelectItem}/>
                    })
                }
            </div>
        </div>
    )
}

export default CardList