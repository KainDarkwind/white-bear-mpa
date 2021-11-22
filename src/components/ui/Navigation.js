import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
   const url = window.location.pathname;

   const tabActiveOnCreate = (url) => {
      if (
         url.indexOf("create-answer") > 0 ||
         url.indexOf("create-imagery") > 0
      ) {
         return "tab-active";
      } else return "";
   };
   const tabActiveOnReview = (url) => {
      if (
         url.indexOf("review-imagery") > 0 ||
         url.indexOf("review-answer") > 0 ||
         url.indexOf("review-empty") > 0
      ) {
         return "tab-active";
      } else return "";
   };

   const tabActiveOnAllCards = (url) => {
      if (url.indexOf("all-cards") > 0) {
         return "tab-active";
      } else return "";
   };

   return (
      <div
         className="d-flex btn-group mt-1 mb-5"
         role="navigation"
         aria-label="Navigation"
      >
         <Link
            to="/create-answer"
            className={`btn btn-secondary tab-separator ${tabActiveOnCreate(
               url
            )}`}
         >
            Create New
         </Link>
         <Link
            to="/review-imagery"
            className={`btn btn-secondary tab-separator ${tabActiveOnReview(
               url
            )}`}
         >
            Review
         </Link>
         <Link
            to="/all-cards"
            className={`btn btn-secondary tab-separator ${tabActiveOnAllCards(
               url
            )}`}
         >
            All Cards
         </Link>
      </div>
   );
}
