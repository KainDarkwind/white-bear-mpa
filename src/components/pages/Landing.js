import React from "react";
import { Link } from "react-router-dom";
import landingLogo from "../../img/logo-landing.png";

export default function Landing() {
   return (
      <div class="background-image">
         <div class="container">
            <div class="row">
               <div class="col-12">
                  <img src={landingLogo} alt="White Bear Logo" />
                  <h1 class="d-inline text-brand">White Bear</h1>
               </div>
               <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                  <div class="row">
                     <div class="col-12 col-md-6 mb-6">
                        <div
                           class="card p-4 mr-md-5 landing d-none"
                           id="sign-up-card"
                        >
                           <div class="card-block">
                              <h2 class="card-title lead">Nice to meet you.</h2>
                              <p class="card-text">
                                 Sign up for White Bear. Free forever.
                                 <button
                                    class="
                                mt-5
                                btn
                                landing-button
                                btn-primary btn-block
                             "
                                    id="sign-up"
                                 >
                                    Sign up
                                 </button>
                              </p>
                           </div>
                        </div>

                        <div class="card p-4 landing" id="intro-card">
                           <div class="card-block">
                              <h2 class="card-title lead">Nice to meet you.</h2>
                              <p>Sign up for White Bear. Free forever.</p>
                              <p class="mt-3 text-success">
                                 Let's get you signed up.
                              </p>
                              <p class="mt-6">Email address</p>
                              <input
                                 class="form-control"
                                 id="sign-up-email-input"
                                 type="text"
                              />
                              <p
                                 class="text-danger"
                                 id="sign-up-email-error"
                              ></p>
                              <p>Password</p>
                              <p class="text-muted">
                                 Must be 9 characters or longer.
                              </p>
                              <input
                                 class="form-control"
                                 id="sign-up-password-input"
                                 type="password"
                              />
                              <p
                                 class="text-danger"
                                 id="sign-up-password-error"
                              ></p>

                              <button
                                 class="
                             btn
                             mt-5
                             landing-button
                             btn-primary btn-block
                          "
                                 id="lets-go"
                              >
                                 Let's go!
                              </button>
                           </div>
                        </div>
                     </div>

                     <div class="col-md-6 col-12">
                        <div class="card p-4 ml-md-5 landing">
                           <div class="card-block">
                              <h2 class="card-title lead">Welcome back.</h2>
                              <p class="card-text">
                                 Log in with your email address and password.
                              </p>
                              <p class="mt-3">Email address</p>
                              <input class="form-control" type="text" />
                              <p class="mt-3">Password</p>
                              <input class="form-control" type="text" />

                              <Link
                                 to="/create-answer"
                                 id="login-button"
                                 class="
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
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
