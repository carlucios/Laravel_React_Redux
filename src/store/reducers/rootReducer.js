import { combineReducers } from "redux";
import authReducer from "./authReducer";
import loadingReducer from "./loadingReducer";
import notifyReducer from "./notifyReducer";

const rootReducer = combineReducers({
    authReducer,
    loadingReducer,
    notifyReducer
});

export default rootReducer;