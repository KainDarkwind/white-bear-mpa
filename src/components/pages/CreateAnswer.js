import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import { MAX_CARD_CHARS } from "../../utils/helpers";
import classnames from "classnames";

export default class CreateAnswer extends React.Component {
   constructor(props) {
      super(props);
      console.log("In create answer component");
      this.state = {
         answerText: "",
         hasAnswerTextOverflow: true,
      };
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

   render() {
      return (
         <AppTemplate>
            <div className="mt-n4 text-center lead text-muted">
               <h4>Add an answer</h4>
            </div>

            <div className="card mb-5">
               <div className="card-body bg-secondary lead">
                  <textarea
                     id="answer-input"
                     rows="10"
                     className="d-xs-none"
                     onChange={(e) => this.setAnswerTextAndOverflow(e)}
                  ></textarea>
               </div>
            </div>
            <div className="text-right mt-2 mb-5 text-muted">
               <span
                  className={classnames({
                     "text-danger": this.state.hasAnswerTextOverflow,
                  })}
                  id="answer-char-count"
               >
                  {this.state.answerText.length}
               </span>
               /{MAX_CARD_CHARS}
            </div>
            <div>
               <div className="float-right">
                  <Link
                     to="/create-imagery"
                     className={classnames({
                        btn: true,
                        "btn-outline-primary": true,
                        disabled: this.state.hasAnswerTextOverflow,
                     })}
                     id="next-card"
                  >
                     Next
                  </Link>
               </div>
            </div>
         </AppTemplate>
      );
   }
}
