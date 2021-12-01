import React from "react";
import landingLogo from "../../img/logo-landing.png";
import { Link } from "react-router-dom";
import SignUp from "../ui/SignUp";
import Login from "../ui/Login";

export default function Landing() {
   return (
      <div className="background-image">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <Link to="/create-answer">
                     {" "}
                     <img src={landingLogo} alt="White Bear Logo" />
                  </Link>
                  <h1 className="d-inline text-brand">White Bear</h1>
               </div>
               <div className="mt-8 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                  <div className="row">
                     {" "}
                     <SignUp />
                     <Login />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
