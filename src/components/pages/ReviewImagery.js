import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";
const memoryCard = memoryCards[2];

export default function ReviewImagery() {
   return (
      <AppTemplate>
         <div class="card">
            <div class="card-body bg-primary lead">{memoryCard.imagery}</div>
         </div>

         <div class="mt-5">
            <button class="btn btn-link">Previous card</button>
            <div class="float-right">
               <Link to="/review-answer" class="btn btn-outline-primary">
                  Show answer
               </Link>
            </div>
         </div>
      </AppTemplate>
   );
}
