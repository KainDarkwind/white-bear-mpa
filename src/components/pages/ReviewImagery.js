import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";
import axios from "axios";

const memoryCard = memoryCards[2];

export default class ReviewImagery extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get("https://run.mocky.io/v3/65134c69-6c09-4088-bdd9-183a7941e17f")
         .then(function (response) {
            // handle success
            console.log(response);
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

            <div className="mt-5">
               <button className="btn btn-link">Previous card</button>
               <div className="float-right">
                  <Link to="/review-answer" className="btn btn-outline-primary">
                     Show answer
                  </Link>
               </div>
            </div>
         </AppTemplate>
      );
   }
}
