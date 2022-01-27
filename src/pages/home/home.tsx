import {useState} from 'react'

import Details from '../details/details';
import CardList from '../../components/card-list';

function Home() {
    const [selectedMovie, setSelectedMovie] = useState<number|null>(null)

    const onSelectMovie = (movieId:number) => {
        setSelectedMovie(movieId)
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return ( 
        <div>
            {
                selectedMovie && <Details movieId={selectedMovie}/>
            }
            <CardList onSelectMovie={onSelectMovie}/>
        </div>
     );
}

export default Home;