import actions from "../actions";

export default function currentUser(state = {}, action) {
   // action.GET_USER = "GET_USER"
   switch (action.type) {
      case actions.STORE_CURRENT_USER:
         return action.payload;
      default:
         return state;
   }
}
