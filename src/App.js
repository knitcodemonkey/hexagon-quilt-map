import React from "react";
import "./App.css";
import QuiltSection from "./components/QuiltSection";

function App() {
  return (
    <main>
      <div css={{ display: "flex", justifyContent: "space-around" }}>
        {[...Array(27).keys()].forEach((image, idx) => {
          if ([4, 12, 25].indexOf(idx) !== -1) {
            console.log(idx);
            return;
          } else {
            return (
              <div
                key={`orig-image-order-${idx}`}
                css={{
                  width: 50,
                  height: 50,
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(./images/beeCreative${idx + 1}.jpg)`,
                  backgroundPosition: "center",
                  margin: "20px 0",
                  boxShadow: "2px 2px 4px #888888",
                  color: "blue",
                  fontSize: 48,
                }}
              >
                {idx}
              </div>
            );
          }
        })}
      </div>
      <QuiltSection />
    </main>
  );
}

export default App;
