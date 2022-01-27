import axios from 'axios'
const apiKey = '3f08daec7c10788a60573402322fa280'
const baseURL = 'https://api.themoviedb.org'

export const getPopularMovies = async(page=1) => {
    let url = baseURL + `/3/movie/popular?page=${page}&api_key=${apiKey}`
    let res = await axios(url)
    return res.data
}


export const getMovieDetails = async (id:number) => {
    let url = baseURL + `/3/movie/${id}?api_key=${apiKey}`
    let res = await axios.get(url)
    return res.data
}