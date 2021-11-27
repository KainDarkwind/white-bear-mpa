import React from "react";
import editIcon from "../../icon/edit.svg";
import { Link } from "react-router-dom";

export default function MemoryCard(props) {
   return (
      <div className="d-flex align-items-start">
         <div className="app-card flex-fill">
            <div className="card">
               <div className="card-body bg-primary">{props.imagery}</div>
            </div>
            <div className="card mb-5">
               <div className="card-body bg-secondary">{props.answer}</div>
            </div>
         </div>

         <Link to="/edit" className="btn btn-link ml-4 mt-n2 d-flex">
            <img
               src={editIcon}
               className="mr-2 mt-1"
               width="20px"
               alt="Edit Icon"
            />
            Edit
         </Link>
      </div>
   );
}
