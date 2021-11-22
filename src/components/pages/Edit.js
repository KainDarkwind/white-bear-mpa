import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";

export default function Edit() {
   return (
      <>
         <div
            class="bg-success w-100 lead justify-content-center fixed-top d-none"
            id="overlay-success"
         >
            <img src="/icons/success.svg" alt="Success Icon" width="32px" />
            <p class="py-4 ml-2 d-inline">Card created!</p>
         </div>
         <div
            class="bg-danger w-100 lead justify-content-center fixed-top d-none"
            id="overlay-fail"
         >
            <img src="/icons/error.svg" alt="Error Icon" width="32px" />
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
                     <h4>Edit card</h4>
                  </div>
                  <div class="card mb-5">
                     <div class="card-body d-flex bg-primary lead">
                        <textarea
                           rows="6"
                           id="edit-top-input"
                           class="d-xs-none"
                           autofocus
                        ></textarea>
                     </div>
                  </div>

                  <div class="card mt-n5 mb-5">
                     <div class="card-body bg-secondary lead">
                        <textarea
                           rows="6"
                           id="edit-bottom-input"
                           class="d-xs-none"
                           autofocus
                        ></textarea>
                     </div>
                  </div>
                  <div class="text-right mt-2 mb-5 text-muted">
                     <p>
                        Top: <span id="edit-top-char-count">0</span>/240 &nbsp;
                        &nbsp;Bottom:
                        <span id="edit-bottom-char-count">0</span>/240
                     </p>
                  </div>
                  <div class="mb-5">
                     <a href="/all-cards.html" class="btn btn-link">
                        Discard changes
                     </a>
                     <div class="float-right">
                        <button
                           class="btn btn-primary ml-4 disabled"
                           id="save-edit-card"
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
                  <div class="text-center lead text-muted">
                     <h4 class="text-muted">Card properties</h4>
                  </div>
                  <div class="row">
                     <div class="col-4 text-muted">
                        <p>Created on:</p>
                        <p>Last attempt:</p>
                        <p>Next attempt:</p>
                        <p>Consecutives:</p>
                     </div>
                     <div class="col-4">
                        <p>Jun 24, 2112</p>
                        <p>Feb 30, 2020</p>
                        <p>Dec 35, 2020</p>
                        <p>So many</p>
                     </div>
                     <div class="col-4"></div>
                     <div class="mt-3 col checkbox" id="delete-button">
                        <label>
                           <input type="checkbox" value="" />
                           Show Delete Button
                        </label>
                     </div>
                     <div class="col btn btn-danger d-none" id="delete-card">
                        Delete Card
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
