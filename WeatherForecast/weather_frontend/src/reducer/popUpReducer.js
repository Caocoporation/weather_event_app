/* eslint-disable no-unused-vars */
import * as types from "../action/actionTypes";

const initialState = {
    loginPopupStatus: false,
}

const setLoginPopupStatus = (state=initialState, action) =>{
    if (action.type === types.LOGIN_POPUP_STATUS) {
        if (action.payload.loginPopupStatus === state.loginPopupStatus) {
            return {
                ...state,
                loginPopupStatus: true,
            }
        }
        
        else {
            return {
                ...state,
                loginPopupStatus: false,
            }
        }
    }

    else {
        return state
    }
}

export {setLoginPopupStatus};