import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function CreateAnswer() {
   return (
      <AppTemplate>
         <div className="mt-n4 text-center lead text-muted">
            <h4>Add an answer</h4>
         </div>

         <div className="card mb-5">
            <div className="card-body bg-secondary lead">
               <textarea
                  id="answer-input"
                  rows="10"
                  className="d-xs-none"
                  autofocus
               ></textarea>
            </div>
         </div>
         <div className="text-right mt-2 mb-5 text-muted">
            <span id="answer-char-count">0</span>/240
         </div>
         <div>
            <div className="float-right">
               <Link
                  to="/create-imagery"
                  className="btn btn-outline-primary"
                  id="next-card"
               >
                  Next
               </Link>
            </div>
         </div>
      </AppTemplate>
   );
}
