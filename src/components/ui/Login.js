import React from "react";
import { Link } from "react-router-dom";
export default function Login() {
   return (
      <div className="col-md-6 col-12">
         <div className="card p-4 ml-md-5 landing">
            <div className="card-block">
               <h2 className="card-title lead">Welcome back.</h2>
               <p className="card-text">
                  Log in with your email address and password.
               </p>
               <p className="mt-3">Email address</p>
               <input className="form-control" type="text" />
               <p className="mt-3">Password</p>
               <input className="form-control" type="text" />

               <Link
                  to="/create-answer"
                  id="login-button"
                  className="
                             btn
                             mt-5
                             btn-primary
                             landing-button
                             float-right
                          "
               >
                  Log in
               </Link>
            </div>
         </div>
      </div>
   );
}
