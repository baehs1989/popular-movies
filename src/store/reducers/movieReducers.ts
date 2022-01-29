import {ActionType} from '../action-types'
import { Movie } from '../../interfaces'
import {Actions} from '../actions'
import * as localForage from '../../localstorage'

interface MovieState{
    data:{
        [key:number]:Movie
    },
    list:number[]
}

const initialState:MovieState = {
    data:{},
    list:[]
}

const reducer = (state=initialState, action:Actions):MovieState => {
    switch (action.type) {
        case ActionType.ADD_MOVIE:
            let newData = {
                ...state.data,
                [action.payload.id] : action.payload
            }
            let newList = [...state.list, action.payload.id]

            return {
                data:newData,
                list:newList
            }

        case ActionType.DELETE_MOVIE:
            let {
                [action.payload]:deletedOption,
                ...remained
            } = state.data
            return {
                list:state.list.filter(id=>{
                    return id!==action.payload
                }),
                data:remained
            }

        case ActionType.CLEAR_MOVIES:
            return {
                data:{},
                list:[]
            }
        
        case ActionType.SAVE_REDUX_STATE:
            localForage.setItem(state)
            return state
        
        case ActionType.RESTORE_REDUX_STATE:
            if ('data' in action.payload && 'list' in action.payload){
                return {
                    ...action.payload
                }
            }else{
                return state
            }

        default:
            return state
    }
}

export default reducer