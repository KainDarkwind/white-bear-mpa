import actions from "../actions";

export default function queue(queue = {}, action) {
   // action.payload, action.type
   const newQueue = { ...queue };
   switch (action.type) {
      case actions.STORE_QUEUED_CARDS:
         newQueue.cards = action.payload;
         return newQueue; //[{}, {}]
      case actions.INCREMENT_QUEUE_INDEX:
         newQueue.index += 1;
         return newQueue;
      case actions.DECREMENT_QUEUE_INDEX:
         newQueue.index -= 1;
         return newQueue;
      case actions.RESET_QUEUE:
         newQueue.cards = [];
         newQueue.index = 0;
         return newQueue;
      default:
         return queue;
   }
}
