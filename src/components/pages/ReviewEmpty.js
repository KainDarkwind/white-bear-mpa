import React from "react";
import AppTemplate from "../ui/AppTemplate";

export default function ReviewEmpty() {
   return (
      <AppTemplate>
         <div className="mt-n1 text-center text-muted">
            <h4>Out of cards</h4>
         </div>

         <button className="btn btn-link">Previous card</button>
         <div className="float-right">
            <button className="btn btn-outline-primary">Get more cards</button>
         </div>
      </AppTemplate>
   );
}
