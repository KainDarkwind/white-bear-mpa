import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "./reducers/combineReducers";

const initialState = {
   currentUser: {},
   queue: {
      cards: [],
      index: 0,
   },
   editableCard: {},
};

export default createStore(
   combineReducers,
   initialState,
   composeWithDevTools()
);
