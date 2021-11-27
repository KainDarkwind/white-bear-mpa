import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import saveIcon from "../../icon/save.svg";
import memoryCards from "../../mock-data/memory-cards";
import toDisplayDate from "date-fns/format";
const memoryCard = memoryCards[2];

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
         <AppTemplate>
            <div className="mt-n3 text-center lead text-muted">
               <h4>Edit card</h4>
            </div>
            <div className="card mb-5">
               <div className="card-body d-flex bg-primary lead">
                  <textarea
                     rows="6"
                     className="d-md-none"
                     defaultValue={memoryCard.imagery}
                  ></textarea>
                  <textarea
                     rows="4"
                     className="d-none d-md-block"
                     defaultValue={memoryCard.imagery}
                  ></textarea>
               </div>
            </div>

            <div className="card mt-n5 mb-5">
               <div className="card-body bg-secondary lead">
                  <textarea
                     rows="6"
                     id="edit-bottom-input"
                     className="d-xs-none"
                     defaultValue={memoryCard.answer}
                     autofocus
                  ></textarea>
               </div>
            </div>
            <div className="text-right mt-2 mb-5 text-muted">
               <p>
                  Top: <span id="edit-top-char-count">0</span>/240 &nbsp;
                  &nbsp;Bottom:
                  <span id="edit-bottom-char-count">0</span>/240
               </p>
            </div>
            <div className="mb-5">
               <Link to="/all-cards" className="btn btn-link">
                  Discard changes
               </Link>
               <div className="float-right">
                  <button
                     className="btn btn-primary ml-4 disabled"
                     id="save-edit-card"
                  >
                     <img
                        src={saveIcon}
                        alt="Save Icon"
                        width="20px"
                        style={{ marginBottom: "5px", marginRight: "4px" }}
                     />
                     Save
                  </button>
               </div>
            </div>
            <div className="text-center lead text-muted">
               <h4 className="text-muted">Card properties</h4>
            </div>
            <div className="row">
               <div className="col-4 text-muted">
                  <p>Created on:</p>
                  <p>Last attempt:</p>
                  <p>Next attempt:</p>
                  <p>Consecutives:</p>
               </div>
               <div className="col-4">
                  <p>{toDisplayDate(memoryCard.createdAt, "MMM. d, y")}</p>
                  <p>{toDisplayDate(memoryCard.lastAttemptAt, "MMM. d, y")}</p>
                  <p>{toDisplayDate(memoryCard.nextAttemptAt, "MMM. d, y")}</p>
                  <p>{memoryCard.totalSuccessfulAttempts}</p>
               </div>
               <div className="col-4"></div>
               <div className="mt-3 col checkbox" id="delete-button">
                  <label>
                     <input type="checkbox" value="" />
                     Show Delete Button
                  </label>
               </div>
               <div className="col btn btn-danger d-none" id="delete-card">
                  Delete Card
               </div>
            </div>
         </AppTemplate>
      </>
   );
}
