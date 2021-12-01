import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import saveIcon from "../../icon/save.svg";
import successIcon from "../../icon/success.svg";
import errorIcon from "../../icon/error.svg";
import classnames from "classnames";

import memoryCards from "../../mock-data/memory-cards";
import { MAX_CARD_CHARS } from "../../utils/helpers";
const memoryCard = memoryCards[2];

export default class CreateImagery extends React.Component {
   constructor(props) {
      super(props);
      console.log("In edit component");
      this.state = {
         answerText: memoryCard.answer,
         imageryText: "",
         hasImageryTextOverflow: true,
      };
   }

   setImageryTextAndOverflow(e) {
      this.setState({ imageryText: e.target.value });
      if (
         e.target.value.length > MAX_CARD_CHARS ||
         e.target.value.length === 0
      ) {
         this.setState({ hasImageryTextOverflow: true });
      } else {
         this.setState({ hasImageryTextOverflow: false });
      }
   }

   render() {
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
                        onChange={(e) => this.setImageryTextAndOverflow(e)}
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
                  <span
                     className={classnames({
                        "text-danger": this.state.hasImageryTextOverflow,
                     })}
                     id="create-char-count"
                  >
                     {this.state.imageryText.length}
                  </span>
                  /{MAX_CARD_CHARS}
               </div>
               <Link to="/create-answer" className="btn btn-link">
                  Back to answer
               </Link>
               <div className="float-right">
                  <button
                     className={classnames({
                        btn: true,
                        "btn-primary": true,
                        "ml-4": true,
                        disabled: this.state.hasImageryTextOverflow,
                     })}
                     id="save-card"
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
            </AppTemplate>
         </>
      );
   }
}
