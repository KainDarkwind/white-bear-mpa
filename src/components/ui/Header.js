import React from "react";
import { Link } from "react-router-dom";
import whiteBearLogo from "../../icon/logo-app.svg";

export default function Header() {
   return (
      <div>
         <Link to="/">
            <img src={whiteBearLogo} alt="White Bear Logo" width="28px" />
         </Link>
         <h3 className="d-inline text-brand">White Bear</h3>
         <Link to="/" class="btn btn-link float-right">
            Log Out
         </Link>
      </div>
   );
}
