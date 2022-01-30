/* istanbul ignore file */

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

export interface SaveReduxStateAction {
    type:ActionType.SAVE_REDUX_STATE
}

export interface RestoreReduxStateAction {
    type:ActionType.RESTORE_REDUX_STATE,
    payload:{
        data:{
            [key:number]:Movie
        },
        list:number[]
    }
}

export type Actions = AddMovieAction | DeleteMovieAction | ClearMoviesAction | SaveReduxStateAction | RestoreReduxStateAction