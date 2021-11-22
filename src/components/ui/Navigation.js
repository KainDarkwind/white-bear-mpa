import React from "react";

export default function Navigation() {
   return (
      <div>
         <a href="/create-answer.html" class="btn btn-secondary">
            Create New
         </a>
         <a href="/review-imagery.html" class="btn btn-secondary tab-separator">
            Review
         </a>
         <a
            href="/all-cards.html"
            class="btn btn-secondary tab-separator tab-active"
         >
            All Cards
         </a>
      </div>
   );
}
