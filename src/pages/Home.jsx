import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1>UAS Mosi</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <Link to="/dice">Dice</Link>
        <Link to="/queue">Queue</Link>
      </div>
    </div>
  );
};

export default Home;
