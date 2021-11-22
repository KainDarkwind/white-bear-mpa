import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";

export default function CreateAnswer() {
   return (
      <>
         <div class="container">
            <div class="row">
               <div
                  class="
           col-12 col-xl-6
           offset-xl-3
           col-lg-8
           offset-lg-2
           col-md-10
           offset-md-1
        "
               >
                  <Header />
                  <div class="clearfix"></div>

                  <div
                     class="d-flex btn-group mt-1 mb-5"
                     role="navigation"
                     aria-label="Navigation"
                  >
                     <Navigation />
                  </div>
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
                           href="/create-imagery.html"
                           class="btn btn-outline-primary"
                           id="next-card"
                        >
                           Next
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
