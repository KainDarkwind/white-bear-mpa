import { combineReducers } from "redux";
import currentUser from "./currentUser";
import queue from "./queue";

export default combineReducers({
   currentUser,
   queue,
});
