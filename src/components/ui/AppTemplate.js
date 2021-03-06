import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";

export default function AppTemplate(props) {
   return (
      <div className="container">
         <div className="row">
            <div
               className="
   col-12 col-xl-6
   offset-xl-3
   col-lg-8
   offset-lg-2
   col-md-10
   offset-md-1
"
            >
               <Header />
               <div className="clearfix"></div>

               <Navigation />
               {props.children}
            </div>
         </div>
      </div>
   );
}
