import movieReducer from './movieReducers'
import { combineReducers } from 'redux'

const reducers = combineReducers({
    movies: movieReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>