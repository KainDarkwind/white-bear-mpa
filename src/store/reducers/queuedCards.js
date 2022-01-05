import actions from "../actions";

export default function currentqueuedCards(state = [], action) {
   // action.payload, action.type
   switch (action.type) {
      case actions.STORE_QUEUED_CARDS:
         return action.payload; //[{}, {}]
      default:
         return state;
   }
}
