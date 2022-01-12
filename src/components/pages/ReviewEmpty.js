import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { connect } from "react-redux";
import actions from "../../store/actions";

class ReviewEmpty extends React.Component {
   goToPrevCard() {
      this.props.dispatch({ type: actions.DECREMENT_QUEUE_INDEX });
      this.props.history.push("/review-answer");
   }

   getMoreCards() {
      this.props.dispatch({ type: actions.RESET_QUEUE });
      this.props.history.push("/review-imagery");
   }
   render() {
      return (
         <AppTemplate>
            <div className="mt-n1 text-center text-muted">
               <h4>Out of cards</h4>
            </div>

            {this.props.queue.index > 0 && (
               <button
                  className="btn btn-link"
                  onClick={() => {
                     this.goToPrevCard();
                  }}
               >
                  Previous card
               </button>
            )}
            <div className="float-right">
               <button
                  className="btn btn-outline-primary"
                  onClick={() => {
                     this.getMoreCards();
                  }}
               >
                  Get more cards
               </button>
            </div>
         </AppTemplate>
      );
   }
}

function mapStateToProps(state) {
   return {
      queue: state.queue,
   };
}
export default connect(mapStateToProps)(ReviewEmpty);
