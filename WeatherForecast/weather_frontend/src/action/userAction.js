/* eslint-disable no-unused-vars */
import * as types from "./actionTypes";
import axios from "axios";

const userFetchingAction = (loginData, loginUrl) => dispatch => {
    console.log(loginData);

    axios.post(loginUrl, loginData)
        .then((response) => {
            console.log(response.data.user);

            dispatch({
                type: types.FETCHING_USER,
                payload: {
                    user: response.data.user
                }
            })
        })
  
        .catch((err) => {console.log(err)})
}

const userClearingAction = () => dispatch => {
    dispatch({
        type: types.CLEAR_USER,
        payload: {
            user: ""
        }
    })
}

export {userFetchingAction, userClearingAction}