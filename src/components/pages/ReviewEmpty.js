import React from "react";
import AppTemplate from "../ui/AppTemplate";

export default function ReviewEmpty() {
   return (
      <AppTemplate>
         <div class="mt-n1 text-center text-muted">
            <h4>Out of cards</h4>
         </div>

         <button class="btn btn-link">Previous card</button>
         <div class="float-right">
            <button class="btn btn-outline-primary">Get more cards</button>
         </div>
      </AppTemplate>
   );
}
