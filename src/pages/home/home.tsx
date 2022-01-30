import {useState} from 'react'

import Details from '../details/details';
import CardList from '../../components/card-list';
import makeList from '../../components/hoc/makeList';
import CustomDialog from '../../components/dialog';
import * as apiProvider from '../../apiProvider/api'
// import { getPopularMovies } from "../../test_api";

let HOCCardList = makeList(CardList)

function Home() {
    const [selectedMovie, setSelectedMovie] = useState<number|null>(null)

    const onSelectMovie = (movieId:number) => {
        /* istanbul ignore next */
        setSelectedMovie(movieId)
    }

    return (
        <div data-test="home">
            {
                /* istanbul ignore next */
                selectedMovie && 
                <CustomDialog open={!isNaN(selectedMovie)} onClose={()=>setSelectedMovie(null)}>
                    <Details movieId={selectedMovie}/>
                </CustomDialog>
            }
            <HOCCardList onSelectItem={onSelectMovie} onLoadData={apiProvider.getPopularMovies}/>
        </div>
     );
}

export default Home;