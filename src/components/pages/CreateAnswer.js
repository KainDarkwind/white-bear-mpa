import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";

export default function CreateAnswer() {
   return (
      <AppTemplate>
         <Header />
         <div class="clearfix"></div>

         <Navigation />
         <div class="mt-n4 text-center lead text-muted">
            <h4>Add an answer</h4>
         </div>

         <div class="card mb-5">
            <div class="card-body bg-secondary lead">
               <textarea
                  id="answer-input"
                  rows="10"
                  class="d-xs-none"
                  autofocus
               ></textarea>
            </div>
         </div>
         <div class="text-right mt-2 mb-5 text-muted">
            <span id="answer-char-count">0</span>/240
         </div>
         <div>
            <div class="float-right">
               <a
                  href="/create-imagery"
                  class="btn btn-outline-primary"
                  id="next-card"
               >
                  Next
               </a>
            </div>
         </div>
      </AppTemplate>
   );
}
