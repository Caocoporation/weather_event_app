/* eslint-disable no-unused-vars */
import * as types from "../action/actionTypes";

const initialState = {
    loginStatus: false,
}

const setLoginStatus = (state=initialState, action) =>{
    if (action.type === types.SWITCH_LOGIN_STATUS) {
        if (action.payload.loginStatus === state.loginStatus) {
            return {
                ...state,
                loginStatus: true,
            }
        }
        
        else {
            return {
                ...state,
                loginStatus: false,
            }
        }
    }

    else {
        return state
    }
}

export {setLoginStatus};