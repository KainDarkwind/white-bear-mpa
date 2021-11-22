import React from "react";
import "./style/master.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";
import AllCards from "./components/pages/AllCards";
import CreateAnswer from "./components/pages/CreateAnswer";
import CreateImagery from "./components/pages/CreateImagery";
import Edit from "./components/pages/Edit";
import ReviewAnswer from "./components/pages/ReviewAnswer";
import ReviewEmpty from "./components/pages/ReviewEmpty";
import ReviewImagery from "./components/pages/ReviewImagery";

import NotFound from "./components/pages/NotFound";

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/create-answer" element={<CreateAnswer />} />
            <Route path="/create-imagery" element={<CreateImagery />} />
            <Route path="/review-imagery" element={<ReviewImagery />} />
            <Route path="/review-answer" element={<ReviewAnswer />} />
            <Route path="/review-empty" element={<ReviewEmpty />} />
            <Route path="/all-cards" element={<AllCards />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </Router>
   );
}

export default App;
