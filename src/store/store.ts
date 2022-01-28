import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import { localStorageMiddleware } from './middleware/localstorage-middleware'

export const store = createStore(reducers, {}, applyMiddleware(localStorageMiddleware))