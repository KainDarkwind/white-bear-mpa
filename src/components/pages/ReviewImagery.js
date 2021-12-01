import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";
const memoryCard = memoryCards[2];

export default function ReviewImagery() {
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
