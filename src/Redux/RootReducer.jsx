import { combineReducers } from "redux";
import AdminSlice from "../Auth/AdminSlice";
// import { AdminSlice } from "../Auth/AdminSlice";


const RootReducer = combineReducers({
    admin: AdminSlice
})


export default RootReducer;