import Card from "./card"
import { Movie } from "../interfaces"
import classes from './card-list.module.css';
import makeList from './hoc/makeList'

interface CardListProps {
    onSelectItem:(movieId:number)=>void,
    onLoadData:(page:number)=>void,
    data:Movie[]
}

const CardList:React.FC<CardListProps> = ({onSelectItem, data}) => {

    return (
        <div className={classes.wrapper}>
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

export default makeList(CardList)