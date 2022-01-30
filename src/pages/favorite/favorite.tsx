import {useState} from 'react'
import Details from '../details/details';
import CustomDialog from '../../components/dialog';
import CardList from '../../components/card-list';
import { useTypedSelector } from "../../hook/useTypeSelector"

const Favorite = () => {
    const [selectedMovie, setSelectedMovie] = useState<number|null>(null)
    const favorite = useTypedSelector(({movies})=>{
        return movies
    })

    /* istanbul ignore next */
    const onSelectMovie = (movieId:number) => {
        setSelectedMovie(movieId)
    }

    return (
        <div data-test="favorite">
            {
                /* istanbul ignore next */
                selectedMovie && 
                <CustomDialog open={!isNaN(selectedMovie)} onClose={()=>setSelectedMovie(null)}>
                    <Details movieId={selectedMovie}/>
                </CustomDialog>
            }
            <CardList onSelectItem={onSelectMovie} data={Object.values(favorite.data)}/>
        </div>
    )
}

export default Favorite