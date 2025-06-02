import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Navs from "./Navs";
// import Footers from "./Footers";

const App = () => {
  return (
    <div>
      <Router>
        <Navs />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        {/* <Footers /> */}
      </Router>
    </div>
  );
};

export default App;
