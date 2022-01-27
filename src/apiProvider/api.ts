import axios from 'axios'
import {Genres, Movie} from '../interfaces'

const apiKey = process.env.REACT_APP_MOVIEDB_API_KEY
const baseURL = 'https://api.themoviedb.org'

let genres_map:{[key:number]:string}

export const getGenres = async() => {
    let result = {}
    let url = baseURL + `/3/genre/movie/list?api_key=${apiKey}`
    let res = await axios(url)
    console.log(res.data.genres)
    result = res.data.genres.reduce((acc:{[key:number]:string}, g:Genres)=>{
        acc[g.id] = g.name
        return acc
    },{})
    return result
}

export const getPopularMovies = async(page=1) => {
    let url = baseURL + `/3/movie/popular?page=${page}&api_key=${apiKey}`
    let res = await axios(url)
    if (!genres_map){
        genres_map = await getGenres()
    }
    
    console.log(res.data)

    res.data.results.forEach((movie:Movie)=>{
        console.log(movie)
        movie.genre_ids = movie.genre_ids.map((id)=>{
            return genres_map[id as number]
        })
    })
    
    return res.data
}


export const getMovieDetails = async (id:number) => {
    let url = baseURL + `/3/movie/${id}?api_key=${apiKey}`
    let res = await axios.get(url)
    return res.data
}