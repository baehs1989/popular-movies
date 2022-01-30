/* istanbul ignore file */

import axios from "axios";
import { Genres, Movie } from "../interfaces";

const apiKey = process.env.REACT_APP_MOVIEDB_API_KEY;
const baseURL = "https://api.themoviedb.org";

let genres_map: { [key: number]: string };

export const getGenres = async () => {
  let result = {};
  let url = baseURL + `/3/genre/movie/list?api_key=${apiKey}`;
  let res = await axios(url);

  if (res.status !== 200) {
    window.location.href = "/error";
  }

  result = res.data.genres.reduce(
    (acc: { [key: number]: string }, g: Genres) => {
      acc[g.id] = g.name;
      return acc;
    },
    {}
  );
  return result;
};

export const getPopularMovies = async (page = 1) => {
  let url = baseURL + `/3/movie/popular?page=${page}&api_key=${apiKey}`;
  let res = await axios(url).then(res=>{return res})

  if (res.status !== 200) {
    window.location.href = "/error";
  }

  try {
    if (!genres_map) {
      genres_map = await getGenres();
    }

    res.data.results.forEach((movie: Movie) => {
      movie.genre_ids = movie.genre_ids.map((id) => {
        return genres_map[id as number];
      });
    });

    return res.data;
  } catch (error) {
    window.location.href = "/error";
  }
};

export const getMovieDetails = async (id: number) => {
  let url = baseURL + `/3/movie/${id}?api_key=${apiKey}`;
  let res = await axios.get(url);

  if (!genres_map) {
    genres_map = await getGenres();
  }
  //in order to sync the data
  res.data.genre_ids = res.data.genres.map((g : {id:number, name:string})=>g.name)
  return res.data;
};
