/* eslint-disable no-unused-vars */
import * as types from "./actionTypes";
// import axios from "axios";

const loginAction = () => dispatch => {
    // console.log(loginData);

    dispatch({
        type: types.SWITCH_LOGIN_STATUS,
        payload: {
            loginStatus: false
        }
    })
}

export {loginAction}