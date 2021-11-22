import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";

export default function CreateImagery() {
   return (
      <>
         <div
            class="bg-success w-100 lead justify-content-center fixed-top d-none"
            id="overlay-success"
         >
            <img src="/icons/success.svg" width="32px" />
            <p class="py-4 ml-2 d-inline">Card created!</p>
         </div>

         <div
            class="bg-danger w-100 lead justify-content-center fixed-top d-none"
            id="overlay-fail"
         >
            <img src="/icons/error.svg" width="32px" />
            <p class="py-4 ml-2 d-inline">Oops! Our bad. Please try again.</p>
         </div>

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
                  <div class="mt-n3 text-center lead text-muted">
                     <h4>Add memorable imagery</h4>
                  </div>
                  <div class="card mb-5">
                     <div class="card-body d-flex bg-primary lead">
                        <textarea
                           rows="6"
                           id="create-imagery-input"
                           autofocus
                        ></textarea>
                     </div>
                  </div>

                  <div class="card mt-n5 mb-5">
                     <div class="card-body bg-secondary lead">
                        How many brothers fell victim to the streets? Rest in
                        peace, young brotha, there's a heaven for a G Be a lie
                        if I told you that I never thought of death My brothas,
                        we the last ones left, but life goes on How many
                        brothers fell victim to the streets? Rest in peace,
                        young brotha, there's a heaven for a G Be a lie if I
                        told you that I never thought of death My brothas, we
                        the last ones left, but life goes on
                     </div>
                  </div>
                  <div class="text-right mt-2 mb-5 text-muted">
                     <span id="create-char-count">0</span>/240
                  </div>
                  <a href="/create-answer.html" class="btn btn-link">
                     Back to answer
                  </a>
                  <div class="float-right">
                     <button
                        class="btn btn-primary ml-4 disabled"
                        id="save-card"
                     >
                        <img
                           src="icons\save.svg"
                           width="20px"
                           style="margin-bottom: 5px; margin-right: 4px"
                        />
                        Save
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
