/* eslint-disable no-unused-vars */
import * as types from "../action/actionTypes";

const initialState = {
    user: ""
}

const userFetching = (state=initialState, action) =>{
    switch (action.type) {
        case types.FETCHING_USER:
            return {
                ...state,
                user: action.payload.user
            };

        case types.CLEAR_USER:
            return {
                ...state, 
                user: action.payload.user
            }

        default:
            return state
    }
   

}



export {userFetching};