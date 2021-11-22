import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import editIcon from "../../icon/edit.svg";
import AppTemplate from "../ui/AppTemplate";

export default function AllCards() {
   return (
      <AppTemplate>
         <Header />
         <div className="clearfix"></div>

         <Navigation />

         <div className="row my-4">
            <div className="col-8">
               <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Search for a word"
               />
            </div>
            <div className="col-4">
               <button className="btn btn-primary btn-sm btn-block">
                  Search
               </button>
            </div>
         </div>
         <div className="row my-4 no-gutters">
            <div className="col-4">
               <p className="text-muted mt-1">Sort cards by</p>
            </div>
            <div className="col-8">
               <select className="form-control form-control-sm">
                  <option>Hardest</option>
                  <option>Easiest</option>
                  <option>Oldest</option>
                  <option>Most Recent</option>
               </select>
            </div>
         </div>
         <div className="d-flex align-items-start">
            <div className="app-card">
               <div className="card">
                  <div className="card-body bg-primary">
                     Sed ut perspiciatis unde omnis iste natus error sit
                     voluptatem accusantium doloremque laudantium, totam rem
                     aperiam, eaque ipsa quae ab illo inventore veritatis et
                     quasi architecto beatae vitae dicta sunt explicabo. Nemo
                     enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                     aut fugit, sed quia consequuntur magni dolores eos qui
                     ratione voluptatem sequi nesciunt.
                  </div>
               </div>
               <div className="card mb-5">
                  <div className="card-body bg-secondary">
                     Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                     amet, consectetur, adipisci velit, sed quia non numquam
                     eius modi tempora incidunt ut labore et dolore magnam
                     aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                     nostrum exercitationem ullam corporis suscipit laboriosam,
                     nisi ut aliquid ex ea commodi consequatur? Quis autem vel
                     eum iure reprehenderit qui in ea voluptate velit esse quam
                     nihil molestiae consequatur, vel illum qui dolorem eum
                     fugiat quo voluptas nulla pariatur?
                  </div>
               </div>
            </div>

            <a href="/edit" className="btn btn-link ml-4 mt-n2 d-flex">
               <img
                  src={editIcon}
                  className="mr-2 mt-1"
                  width="20px"
                  alt="Edit Icon"
               />
               Edit
            </a>
         </div>

         <div className="d-flex align-items-start">
            <div className="app-card">
               <div className="card">
                  <div className="card-body bg-primary">
                     How many brothers fell victim to the streets? Rest in
                     peace, young brotha, there's a heaven for a G Be a lie if I
                     told you that I never thought of death My brothas, we the
                     last ones left, but life goes on How many brothers fell
                     victim to the streets? Rest in peace, young brotha, there's
                     a heaven for a G Be a lie if I told you that I never
                     thought of death My brothas, we the last ones left, but
                     life goes on
                  </div>
               </div>
               <div className="card mb-5">
                  <div className="card-body bg-secondary">
                     As I bail through the empty halls, breath stinkin' in my
                     jaws Ring, ring, ring, quiet, y'all, incomin' call Plus
                     this my homie from high school, he gettin' by It's time to
                     bury another brother, nobody cry Life as a baller: alcohol
                     and booty calls We used to do 'em as adolescents, do you
                     recall? Raised as G's, loc'ed out, and blazed the Wii Get
                     on the roof, let's get smoked out, and blaze with me Two in
                     the morning and we still high, add out Screamin', "Thug
                     'til I die!" before I passed out But now that you're gone,
                     I'm in the zone Thinkin' I don't wanna die all alone, but
                     now you gone
                  </div>
               </div>
            </div>
            <button className="btn btn-link ml-4 mt-n2 d-flex">
               <img
                  src={editIcon}
                  alt="Edit Icon"
                  className="mr-2 mt-1"
                  width="20px"
               />
               Edit
            </button>
         </div>
      </AppTemplate>
   );
}
