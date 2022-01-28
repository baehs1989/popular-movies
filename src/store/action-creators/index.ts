import { Dispatch } from "redux";
import {ActionType} from '../action-types'
import { AddMovieAction, DeleteMovieAction, ClearMoviesAction } from "../actions";
import { Movie } from "../../interfaces";

export const addMovie = (movie:Movie):AddMovieAction=>{
    return {
        type:ActionType.ADD_MOVIE,
        payload:movie
    }
}

export const deleteMovie = (id:number):DeleteMovieAction=>{
    return {
        type:ActionType.DELETE_MOVIE,
        payload:id
    }
}

export const clearMovies = ():ClearMoviesAction=>{
    return {
        type:ActionType.CLEAR_MOVIES
    }
}