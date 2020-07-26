import userReducer from "./user/user.reducer.js";
import {combineReducers} from "redux";
const rootReducer = combineReducers({
    user: userReducer
})
export default rootReducer;