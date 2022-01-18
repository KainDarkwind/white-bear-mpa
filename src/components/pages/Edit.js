import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import saveIcon from "../../icon/save.svg";
import toDisplayDate from "date-fns/format";
import classnames from "classnames";
import { safelyParseJson, MAX_CARD_CHARS } from "../../utils/helpers";
import { connect } from "react-redux";
import without from "lodash/without";
import actions from "../../store/actions";

class Edit extends React.Component {
   constructor(props) {
      super(props);
      console.log("In edit component");
      const memoryCard = this.props.editableCard.card;
      console.log("The answer:", memoryCard.answer);
      console.log("the image:", memoryCard.imagery);
      this.state = {
         answerText: memoryCard.answer,
         imageryText: memoryCard.imagery,
         hasAnswerTextOverflow: false,
         hasImageryTextOverflow: false,
         isSelected: false,
      };
   }

   updateState(e) {
      let value = e.target.value;
      // eslint-disable-next-line
      if (value === "true" || value === "false" || value == Number(value)) {
         value = safelyParseJson(value);
      }

      this.setState({ [e.target.name]: value });
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

   setAnswerTextAndOverflow(e) {
      this.setState({ answerText: e.target.value });
      if (
         e.target.value.length > MAX_CARD_CHARS ||
         e.target.value.length === 0
      ) {
         this.setState({ hasAnswerTextOverflow: true });
      } else {
         this.setState({ hasAnswerTextOverflow: false });
      }
   }

   deleteCardFromStore() {
      const deletedCard = this.props.editableCard.card;
      const cards = this.props.queue.cards;
      const filteredCards = without(cards, deletedCard);
      this.props.dispatch({
         type: actions.STORE_QUEUED_CARDS,
         payload: filteredCards,
      });
      if (filteredCards[this.props.queue.index] === undefined) {
         this.props.history.push("/review-empty");
      } else {
         this.props.history.push("/review-imagery");
      }
   }

   render() {
      const memoryCard = this.props.editableCard.card;
      return (
         <>
            <div
               className="bg-success w-100 lead justify-content-center fixed-top d-none"
               id="overlay-success"
            >
               <img src="/icons/success.svg" alt="Success Icon" width="32px" />
               <p className="py-4 ml-2 d-inline">Card created!</p>
            </div>
            <div
               className="bg-danger w-100 lead justify-content-center fixed-top d-none"
               id="overlay-fail"
            >
               <img src="/icons/error.svg" alt="Error Icon" width="32px" />
               <p className="py-4 ml-2 d-inline">
                  Oops! Our bad. Please try again.
               </p>
            </div>
            <AppTemplate>
               <div className="mt-n3 text-center lead text-muted">
                  <h4>Edit card</h4>
               </div>
               <div className="card mb-5">
                  <div className="card-body d-flex bg-primary lead">
                     <textarea
                        rows="4"
                        className="d-md-block"
                        defaultValue={memoryCard.imagery}
                        onChange={(e) => this.setImageryTextAndOverflow(e)}
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
                        onChange={(e) => this.setAnswerTextAndOverflow(e)}
                     ></textarea>
                  </div>
               </div>
               <div className="text-right mt-2 mb-5 text-muted">
                  <p>
                     Top:{" "}
                     <span
                        className={classnames({
                           "text-danger": this.state.hasImageryTextOverflow,
                        })}
                        id="edit-top-char-count"
                     >
                        {this.state.imageryText.length}
                     </span>
                     /{MAX_CARD_CHARS} &nbsp; &nbsp;Bottom:
                     <span
                        className={classnames({
                           "text-danger": this.state.hasAnswerTextOverflow,
                        })}
                        id="edit-bottom-char-count"
                     >
                        {this.state.answerText.length}
                     </span>
                     /{MAX_CARD_CHARS}
                  </p>
               </div>
               <div className="mb-5">
                  <Link
                     to={this.props.editableCard.prevRoute}
                     className="btn btn-link"
                  >
                     Discard changes
                  </Link>
                  <div className="float-right">
                     <Link
                        to={this.props.editableCard.prevRoute}
                        className={classnames({
                           btn: true,
                           "btn-primary": true,
                           "ml-4": true,
                           disabled:
                              this.state.hasAnswerTextOverflow ||
                              this.state.hasImageryTextOverflow,
                        })}
                        id="save-edit-card"
                     >
                        <img
                           src={saveIcon}
                           alt="Save Icon"
                           width="20px"
                           style={{ marginBottom: "5px", marginRight: "4px" }}
                        />
                        Save
                     </Link>
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
                     <p>
                        {toDisplayDate(memoryCard.lastAttemptAt, "MMM. d, y")}
                     </p>
                     <p>
                        {toDisplayDate(memoryCard.nextAttemptAt, "MMM. d, y")}
                     </p>
                     <p>{memoryCard.totalSuccessfulAttempts}</p>
                  </div>
                  <div className="col-4"></div>
                  <div className="mt-3 col checkbox" id="delete-button">
                     <label>
                        <input
                           type="checkbox"
                           name="isSelected"
                           checked={this.state.isSelected}
                           value={!this.state.isSelected}
                           onChange={(e) => {
                              this.updateState(e);
                           }}
                        />
                        Show Delete Button
                     </label>
                  </div>
                  <div
                     className={classnames({
                        btn: true,
                        "btn-danger": true,
                        "d-none": !this.state.isSelected,
                     })}
                     id="delete-card"
                  >
                     <button
                        onClick={() => {
                           this.deleteCardFromStore();
                        }}
                     >
                        Delete Card
                     </button>
                  </div>
               </div>
            </AppTemplate>
         </>
      );
   }
}

function mapStateToProps(state) {
   return {
      editableCard: state.editableCard,
      queue: state.queue,
   };
}
export default connect(mapStateToProps)(Edit);
