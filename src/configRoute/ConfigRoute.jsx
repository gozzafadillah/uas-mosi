import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DiceGame from "../pages/DiceGame";
import QueueFrequency from "../pages/QueueFrequency";
import Home from "../pages/Home";

const ConfigRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dice" element={<DiceGame />} />
        <Route path="/queue" element={<QueueFrequency />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ConfigRoute;
