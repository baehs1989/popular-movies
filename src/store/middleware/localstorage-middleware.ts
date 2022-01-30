import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Actions } from "../actions"
import {saveReduxState} from '../action-creators'

/* istanbul ignore file */
export const localStorageMiddleware = ({dispatch}:{dispatch:Dispatch<Actions>}) => {
    return (next:(action:Actions)=>void)=>{
        return (action:Actions)=>{
            next(action)
            if (action.type !== ActionType.SAVE_REDUX_STATE){
                dispatch(saveReduxState())
            }
        }
    }
}