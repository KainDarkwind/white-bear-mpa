import { combineReducers } from "redux";
import currentUser from "./currentUser";
import editableCard from "./editableCard";
import queue from "./queue";

export default combineReducers({
   currentUser,
   queue,
   editableCard,
});
