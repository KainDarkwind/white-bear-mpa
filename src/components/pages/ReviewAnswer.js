import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";

export default function ReviewAnswer() {
   return (
      <>
         <div class="container">
            <div class="row">
               <div class="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                  <Header />
                  <div class="clearfix"></div>

                  <div
                     class="d-flex btn-group mt-1 mb-5"
                     role="navigation"
                     aria-label="Navigation"
                  >
                     <Navigation />
                  </div>

                  <div class="card">
                     <div class="card-body bg-primary lead">
                        Bury me smilin' with G's in my pocket, Have a party at
                        my funeral, let every rapper rock it, Let the ohs that I
                        used to know, From way befo' kiss me from my head to my
                        toe, Give me a paper and a pen, so I can write about my
                        life of sin, A couple bottles of gin, in case I don't
                        get in.
                     </div>
                  </div>
                  <div class="card mb-5">
                     <div class="card-body bg-secondary lead">
                        Tell all my people I'm a writer, Nobody cries when we
                        die, we outlaws, let me ride Until I get free, I live my
                        life in the fast lane, got police chasin' me, To my
                        brothas from old blocks, from old crews, brothas that
                        guided me through back in the old school, Pour out some
                        liquor, have a toast for the homies
                     </div>
                  </div>

                  <a href="edit.html" class="btn btn-link">
                     Edit card
                  </a>
                  <div class="float-right">
                     <a
                        href="review-imagery.html"
                        class="btn btn-outline-primary"
                     >
                        Needs work
                     </a>
                     <a href="/review-empty.html" class="btn btn-primary ml-4">
                        <img
                           src="icons\thumbs-up.svg"
                           width="20px"
                           style="margin-bottom: 5px; margin-right: 4px"
                        />
                        Got it!
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
