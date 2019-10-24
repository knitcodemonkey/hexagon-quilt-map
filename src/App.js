import React from "react";
import "./App.css";
import Hexagon from "./components/Hexagon";

function App() {
  return (
    <div
      className="Quilt"
      css={{
        display: "grid",
        gridTemplateColumns: "repeat(18, 85px)",
        gridTemplateRows: "repeat(7, 100px)",
      }}
    >
      {[...Array(18 * 7).keys()].map((num, idx) => (
        <Hexagon key={`hexi-key-${num}`} idx={idx} />
      ))}
    </div>
  );
}

export default App;
