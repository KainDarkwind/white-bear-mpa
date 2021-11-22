import React from "react";

export default function Navigation() {
   return (
      <div
         className="d-flex btn-group mt-1 mb-5"
         role="navigation"
         aria-label="Navigation"
      >
         <a href="/create-answer" className="btn btn-secondary tab-separator">
            Create New
         </a>
         <a href="/review-imagery" className="btn btn-secondary tab-separator">
            Review
         </a>
         <a href="/all-cards" className="btn btn-secondary tab-separator">
            All Cards
         </a>
      </div>
   );
}
