import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "./reducers/combineReducers";

const initialState = {
   user: {},
   queuedCards: [],
   indexOfCurrentCard: 0,
};

export default createStore(
   combineReducers,
   initialState,
   composeWithDevTools()
);