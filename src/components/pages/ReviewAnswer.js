import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import successIcon from "../../icon/success.svg";
import memoryCards from "../../mock-data/memory-cards";
const memoryCard = memoryCards[2];

export default function ReviewAnswer() {
   return (
      <AppTemplate>
         <div className="card">
            <div className="card-body bg-primary lead">
               {memoryCard.imagery}
            </div>
         </div>
         <div className="card mb-5">
            <div className="card-body bg-secondary lead">
               {memoryCard.answer}
            </div>
         </div>

         <Link to="/edit" className="btn btn-link">
            Edit card
         </Link>
         <div className="float-right">
            <Link to="/review-imagery" className="btn btn-outline-primary">
               Needs work
            </Link>
            <Link to="/review-empty" className="btn btn-primary ml-4">
               <img
                  src={successIcon}
                  alt="Thumbs Up Icon"
                  width="20px"
                  style={{ marginBottom: "5px", marginRight: "4px" }}
               />
               Got it!
            </Link>
         </div>
      </AppTemplate>
   );
}
