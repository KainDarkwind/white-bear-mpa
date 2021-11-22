import React from "react";

export default function ReviewImagery() {
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
                  <a href="/index.html">
                     <img src="icons/logo-app.svg" width="28px" />
                  </a>
                  <h3 class="d-inline text-brand">White Bear</h3>
                  <a href="/index.html" class="btn btn-link float-right">
                     Log Out
                  </a>
                  <div class="clearfix"></div>

                  <div
                     class="d-flex btn-group mt-1 mb-5"
                     role="navigation"
                     aria-label="Navigation"
                  >
                     <a href="/create-answer.html" class="btn btn-secondary">
                        Create New
                     </a>
                     <a
                        href="/review-imagery.html"
                        class="btn btn-secondary tab-separator"
                     >
                        Review
                     </a>
                     <a
                        href="/all-cards.html"
                        class="btn btn-secondary tab-separator tab-active"
                     >
                        All Cards
                     </a>
                  </div>

                  <div class="card">
                     <div class="card-body bg-primary lead">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt.
                     </div>
                  </div>

                  <div class="mt-5">
                     <button class="btn btn-link">Previous card</button>
                     <div class="float-right">
                        <a
                           href="/review-answer.html"
                           class="btn btn-outline-primary"
                        >
                           Show answer
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
