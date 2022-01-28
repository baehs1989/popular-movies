import { ActionType } from "../action-types";
import {
  AddMovieAction,
  DeleteMovieAction,
  ClearMoviesAction,
  SaveReduxStateAction,
  RestoreReduxStateAction,
} from "../actions";
import { Movie } from "../../interfaces";

export const addMovie = (movie: Movie): AddMovieAction => {
  return {
    type: ActionType.ADD_MOVIE,
    payload: movie,
  };
};

export const deleteMovie = (id: number): DeleteMovieAction => {
  return {
    type: ActionType.DELETE_MOVIE,
    payload: id,
  };
};

export const clearMovies = (): ClearMoviesAction => {
  return {
    type: ActionType.CLEAR_MOVIES,
  };
};

export const saveReduxState = (): SaveReduxStateAction => {
  return {
    type: ActionType.SAVE_REDUX_STATE,
  };
};

export const restoreReduxState = (state: {
  data: {
    [key: number]: Movie;
  };
  list: number[];
}): RestoreReduxStateAction => {
  return {
    type: ActionType.RESTORE_REDUX_STATE,
    payload: state,
  };
};
