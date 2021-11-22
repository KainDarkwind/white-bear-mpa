import React from "react";

export default function Header() {
   return (
      <div>
         <a href="/index.html">
            <img src="icons/logo-app.svg" width="28px" />
         </a>
         <h3 class="d-inline text-brand">White Bear</h3>
         <a href="/index.html" class="btn btn-link float-right">
            Log Out
         </a>
      </div>
   );
}
