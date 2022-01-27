import { useEffect, useState } from 'react';

import {getPopularMovies} from '../../test_api'
import {Movie} from '../../interfaces'
import Card from '../../components/card';
import Details from '../details/details';

function Home() {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(()=>{
        const initialCall = async () => {
            let movies = await getPopularMovies()
            setMovies(movies.results)
        }
        initialCall()
    },[])
    
    return ( 
        <div>
            <Details/>
            <div style={{
                display:'flex',
                flexWrap:'wrap'
            }}>
                {
                    movies.map(movie=>{
                        return <Card key={movie.title} data={movie}/>
                    })
                }
            </div>
        </div>
     );
}

export default Home;