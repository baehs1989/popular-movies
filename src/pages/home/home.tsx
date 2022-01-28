import {useState} from 'react'

import Details from '../details/details';
import CardList from '../../components/card-list';
import CustomDialog from '../../components/dialog';
// import * as apiProvider from '../../apiProvider/api'
import { getPopularMovies } from "../../test_api";

function Home() {
    const [selectedMovie, setSelectedMovie] = useState<number|null>(null)

    const onSelectMovie = (movieId:number) => {
        setSelectedMovie(movieId)
    }

    return (
        <div>
            {
                selectedMovie && 
                <CustomDialog open={!isNaN(selectedMovie)} onClose={()=>setSelectedMovie(null)}>
                    <Details movieId={selectedMovie}/>
                </CustomDialog>
            }
            <CardList onSelectItem={onSelectMovie} onLoadData={getPopularMovies}/>
        </div>
     );
}

export default Home;