/* eslint-disable no-unused-vars */
import * as types from "./actionTypes";
import axios from "axios";


const loginPopupStatus = () => dispatch => {
    dispatch({
        type: types.LOGIN_POPUP_STATUS,
        payload: {
            loginPopupStatus: false
        }
    })
}

export {loginPopupStatus}