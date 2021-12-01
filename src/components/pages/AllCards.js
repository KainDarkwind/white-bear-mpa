import React from "react";
import memoryCards from "../../mock-data/memory-cards";
import AppTemplate from "../ui/AppTemplate";
import MemoryCard from "../ui/MemoryCard";

export default function AllCards() {
   return (
      <AppTemplate>
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
         {memoryCards.map((memoryCard) => {
            return (
               <MemoryCard
                  answer={memoryCard.answer}
                  imagery={memoryCard.imagery}
                  key={memoryCard.id}
               />
            );
         })}
      </AppTemplate>
   );
}
