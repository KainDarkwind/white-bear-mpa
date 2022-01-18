import React from "react";
import editIcon from "../../icon/edit.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import actions from "../../store/actions";

class MemoryCard extends React.Component {
   constructor(props) {
      super(props);
      console.log(props);
      this.state = {};
   }

   storeEditableCard() {
      this.props.dispatch({
         type: actions.STORE_EDITABLE_CARD,
         payload: { card: this.props.memoryCard, prevRoute: "/all-cards" },
      });
   }

   render() {
      return (
         <div className="d-flex align-items-start">
            <div className="app-card flex-fill">
               <div className="card">
                  <div className="card-body bg-primary">
                     {this.props.memoryCard.imagery}
                  </div>
               </div>
               <div className="card mb-5">
                  <div className="card-body bg-secondary">
                     {this.props.memoryCard.answer}
                  </div>
               </div>
            </div>

            <Link
               to="/edit"
               className="btn btn-link ml-4 mt-n2 d-flex"
               onClick={() => {
                  this.storeEditableCard();
               }}
            >
               <img
                  src={editIcon}
                  className="align-bottom mr-2 mt-1"
                  width="20px"
                  alt="Edit Icon"
               />
               Edit
            </Link>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return {};
}
export default connect(mapStateToProps)(MemoryCard);
