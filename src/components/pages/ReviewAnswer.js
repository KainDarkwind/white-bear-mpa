import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import successIcon from "../../icon/success.svg";

export default function ReviewAnswer() {
   return (
      <AppTemplate>
         <div class="card">
            <div class="card-body bg-primary lead">
               Bury me smilin' with G's in my pocket, Have a party at my
               funeral, let every rapper rock it, Let the ohs that I used to
               know, From way befo' kiss me from my head to my toe, Give me a
               paper and a pen, so I can write about my life of sin, A couple
               bottles of gin, in case I don't get in.
            </div>
         </div>
         <div class="card mb-5">
            <div class="card-body bg-secondary lead">
               Tell all my people I'm a writer, Nobody cries when we die, we
               outlaws, let me ride Until I get free, I live my life in the fast
               lane, got police chasin' me, To my brothas from old blocks, from
               old crews, brothas that guided me through back in the old school,
               Pour out some liquor, have a toast for the homies
            </div>
         </div>

         <Link to="/edit" class="btn btn-link">
            Edit card
         </Link>
         <div class="float-right">
            <Link to="/review-imagery" class="btn btn-outline-primary">
               Needs work
            </Link>
            <Link to="/review-empty" class="btn btn-primary ml-4">
               <img
                  src={successIcon}
                  alt="Thumbs Up Icon"
                  width="20px"
                  style={{ marginBottom: "5px", marginRight: "4px" }}
               />
               Got it!
            </Link>
         </div>
      </AppTemplate>
   );
}
