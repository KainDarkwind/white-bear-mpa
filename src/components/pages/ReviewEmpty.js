import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";

export default function ReviewEmpty() {
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

                  <div class="mt-n1 text-center text-muted">
                     <h4>Out of cards</h4>
                  </div>

                  <button class="btn btn-link">Previous card</button>
                  <div class="float-right">
                     <button class="btn btn-outline-primary">
                        Get more cards
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
