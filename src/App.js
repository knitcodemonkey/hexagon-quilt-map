import React from "react";
import "./App.css";
import QuiltSection from "./components/QuiltSection";
import images from "./components/image";

function App() {
  console.log(images);
  return (
    <main>
      <div css={{ display: "flex", justifyContent: "space-around" }}>
        {[...Array(25).keys()].map((image, idx) => {
          console.log(idx + 1);
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
              {idx + 1}
            </div>
          );
        })}
      </div>
      <QuiltSection />
    </main>
  );
}

export default App;
