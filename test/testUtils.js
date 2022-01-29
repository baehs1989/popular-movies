import { createStore } from 'redux';
import reducers from '../src/store/reducers'

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`)
}

export const storeFactory = (initialState) => {
   return createStore(reducers, {});
}