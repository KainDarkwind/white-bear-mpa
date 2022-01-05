import { combineReducers } from "redux";
import currentUser from "./currentUser";
import queuedCards from "./queuedCards";
import indexOfCurrentCard from "./indexOfCurrentCard";

export default combineReducers({
   currentUser,
   queuedCards,
   indexOfCurrentCard,
});
