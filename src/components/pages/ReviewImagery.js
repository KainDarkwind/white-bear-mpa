import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";

export default function ReviewImagery() {
   return (
      <AppTemplate>
         <Header />
         <div class="clearfix"></div>

         <Navigation />

         <div class="card">
            <div class="card-body bg-primary lead">
               Sed ut perspiciatis unde omnis iste natus error sit voluptatem
               accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
               quae ab illo inventore veritatis et quasi architecto beatae vitae
               dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
               sit aspernatur aut odit aut fugit, sed quia consequuntur magni
               dolores eos qui ratione voluptatem sequi nesciunt.
            </div>
         </div>

         <div class="mt-5">
            <button class="btn btn-link">Previous card</button>
            <div class="float-right">
               <a href="/review-answer" class="btn btn-outline-primary">
                  Show answer
               </a>
            </div>
         </div>
      </AppTemplate>
   );
}
