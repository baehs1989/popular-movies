import {ActionType} from '../action-types'
import { Movie } from '../../interfaces'

export interface AddMovieAction {
    type:ActionType.ADD_MOVIE,
    payload:Movie
}

export interface DeleteMovieAction {
    type:ActionType.DELETE_MOVIE,
    payload:number
}

export interface ClearMoviesAction {
    type:ActionType.CLEAR_MOVIES
}

export type Actions = AddMovieAction | DeleteMovieAction | ClearMoviesAction 