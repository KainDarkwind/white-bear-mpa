import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import saveIcon from "../../icon/save.svg";
import successIcon from "../../icon/success.svg";
import errorIcon from "../../icon/error.svg";
import memoryCards from "../../mock-data/memory-cards";
const memoryCard = memoryCards[2];

export default function CreateImagery() {
   return (
      <>
         <div
            className="bg-success w-100 lead justify-content-center fixed-top d-none"
            id="overlay-success"
         >
            <img src={successIcon} alt="Success Icon" width="32px" />
            <p className="py-4 ml-2 d-inline">Card created!</p>
         </div>

         <div
            className="bg-danger w-100 lead justify-content-center fixed-top d-none"
            id="overlay-fail"
         >
            <img src={errorIcon} alt="Error Icon" width="32px" />
            <p className="py-4 ml-2 d-inline">
               Oops! Our bad. Please try again.
            </p>
         </div>

         <AppTemplate>
            <div className="mt-n3 text-center lead text-muted">
               <h4>Add memorable imagery</h4>
            </div>
            <div className="card mb-5">
               <div className="card-body d-flex bg-primary lead">
                  <textarea
                     rows="6"
                     id="create-imagery-input"
                     autofocus
                  ></textarea>
               </div>
            </div>

            <div className="card mt-n5 mb-5">
               <div className="card-body bg-secondary lead">
                  {memoryCard.answer}
               </div>
            </div>
            <div className="text-right mt-2 mb-5 text-muted">
               <span id="create-char-count">0</span>/240
            </div>
            <Link to="/create-answer" className="btn btn-link">
               Back to answer
            </Link>
            <div className="float-right">
               <button className="btn btn-primary ml-4 disabled" id="save-card">
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
