import React from "react";
import { Route, Routes } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import Home from "../src/components/Home";
import InternHome from "../src/internPages/Home/Home";

const Routings = () => {
  return (
    <div>
      <Routes>
        <Route path="/cybrsfer" element={<Home />} />
        <Route path="/cybrsfer/career" element={<InternHome />} />
      </Routes>
    </div>
  );
};

export default Routings;
