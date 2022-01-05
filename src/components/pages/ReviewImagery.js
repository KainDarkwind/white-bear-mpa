import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";

const memoryCard = memoryCards[2];

class ReviewImagery extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get(
            "https://raw.githubusercontent.com/KainDarkwind/white-bear-mpa/main/src/mock-data/memory-cards.json"
         )
         .then(function (res) {
            // handle success
            console.log(res);
            props.dispatch({
               type: actions.STORE_QUEUED_CARDS,
               payload: res.data,
            });
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         })
         .then(function () {
            // always executed
         });
   }
   render() {
      return (
         <AppTemplate>
            <div className="card">
               <div className="card-body bg-primary lead">
                  {memoryCard.imagery}
               </div>
            </div>

            <Link to="/review-answer" className="mt-5 btn btn-link">
               Previous card
            </Link>

            <Link
               to="/review-answer"
               className="btn btn-outline-primary float-right"
            >
               Show answer
            </Link>
         </AppTemplate>
      );
   }
}
function mapStateToProps() {
   return {};
}
export default connect(mapStateToProps)(ReviewImagery);
