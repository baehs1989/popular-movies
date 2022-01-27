import { useEffect, useState } from 'react';

import Card from "./card"
import { Movie } from "../interfaces"
import { getPopularMovies } from '../test_api';
import classes from './card-list.module.css'

interface CardListProps {
    onSelectMovie:(movieId:number)=>void
}

const CardList:React.FC<CardListProps> = ({onSelectMovie}) => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [lastPage, setLastPage] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [loadingMore, setLoadingMore] = useState(false)

    useEffect(()=>{
        const initialCall = async () => {
            let movies = await getPopularMovies(currentPage)
            setMovies(movies.results)
            setCurrentPage(movies.page)
            setLastPage(movies.total_pages)
            setIsLoading(false)
        }
        initialCall()
    //eslint-disable-next-line
    },[])

    const loadMore = async () => {
        let new_movies = await getPopularMovies(currentPage+1)
        setMovies([...movies, ...new_movies.results])
        setCurrentPage(new_movies.page)
        setLoadingMore(false)
    }

    if (isLoading){
        return <div>Loading...</div>
    }

    return (
        <>
            <div className={classes.wrapper}>
                {
                    movies.map(movie=>{
                        return <Card key={movie.id} data={movie} onSelectMovie={onSelectMovie}/>
                    })
                }
            </div>
            {
                !loadingMore && (currentPage !== lastPage )&&
                <div className={classes.actions}>
                    <button className={classes.button} onClick={()=>{setLoadingMore(true);loadMore()}}>Load More</button>
                </div>
            }
            {
                loadingMore && <div>loading...</div>
            }
        </>

    )
}

export default CardList