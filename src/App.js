import React from "react";
import "./App.css";
import QuiltSection from "./components/QuiltSection";
import FabricKey from "./components/FabricKey";

function App() {
  // Find out number of instances
  let counts = {};
  const hueWidth = 5;

  const setCounts = imgNum => {
    counts[imgNum] = (counts[imgNum] || 0) + 1;
  };

  return (
    <main>
      <QuiltSection setCounts={setCounts} hueWidth={hueWidth} />

      <FabricKey counts={counts} hueWidth={hueWidth} />
    </main>
  );
}

export default App;
