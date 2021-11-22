import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import saveIcon from "../../icon/save.svg";
import successIcon from "../../icon/success.svg";
import errorIcon from "../../icon/error.svg";

export default function CreateImagery() {
   return (
      <>
         <div
            class="bg-success w-100 lead justify-content-center fixed-top d-none"
            id="overlay-success"
         >
            <img src={successIcon} alt="Success Icon" width="32px" />
            <p class="py-4 ml-2 d-inline">Card created!</p>
         </div>

         <div
            class="bg-danger w-100 lead justify-content-center fixed-top d-none"
            id="overlay-fail"
         >
            <img src={errorIcon} alt="Error Icon" width="32px" />
            <p class="py-4 ml-2 d-inline">Oops! Our bad. Please try again.</p>
         </div>

         <AppTemplate>
            <Header />
            <div class="clearfix"></div>

            <Navigation />
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
                  How many brothers fell victim to the streets? Rest in peace,
                  young brotha, there's a heaven for a G Be a lie if I told you
                  that I never thought of death My brothas, we the last ones
                  left, but life goes on How many brothers fell victim to the
                  streets? Rest in peace, young brotha, there's a heaven for a G
                  Be a lie if I told you that I never thought of death My
                  brothas, we the last ones left, but life goes on
               </div>
            </div>
            <div class="text-right mt-2 mb-5 text-muted">
               <span id="create-char-count">0</span>/240
            </div>
            <a href="/create-answer" class="btn btn-link">
               Back to answer
            </a>
            <div class="float-right">
               <button class="btn btn-primary ml-4 disabled" id="save-card">
                  <img
                     src={saveIcon}
                     alt="Save Icon"
                     width="20px"
                     style={{ marginBottom: "5px", marginRight: "4px" }}
                  />
                  Save
               </button>
            </div>
         </AppTemplate>
      </>
   );
}
