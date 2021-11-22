import React from "react";
import whiteBearLogo from "../../icon/logo-app.svg";

export default function Header() {
   return (
      <div>
         <a href="/index.html">
            <img src={whiteBearLogo} alt="White Bear Logo" width="28px" />
         </a>
         <h3 className="d-inline text-brand">White Bear</h3>
         <a href="/" class="btn btn-link float-right">
            Log Out
         </a>
      </div>
   );
}
