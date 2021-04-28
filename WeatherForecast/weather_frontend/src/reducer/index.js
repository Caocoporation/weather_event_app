/* eslint-disable no-unused-vars */
import { combineReducers } from "redux";
// import websocketReducer from "./websocketProducer";
import {setLoginStatus} from "./loginReducer";
import {userFetching} from "./userReducer";
import {setLoginPopupStatus} from "./popUpReducer"

const rootReducer = combineReducers ({
    loginStatus: setLoginStatus,
    user: userFetching,
    popup: setLoginPopupStatus,
})

export default rootReducer;