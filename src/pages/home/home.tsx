import {useState} from 'react'

import Details from '../details/details';
import CardList from '../../components/card-list';
import CustomDialog from '../../components/dialog';

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
            <CardList onSelectMovie={onSelectMovie}/>
        </div>
     );
}

export default Home;