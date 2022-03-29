import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Home2 from "./Home2";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/2" element={<Home2 />} />
      </Routes>
    </Router>
  );
};

export default App;
