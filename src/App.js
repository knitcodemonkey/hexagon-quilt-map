import React from "react";
import "./App.css";
import QuiltSection from "./components/QuiltSection";

function App() {
  return (
    <main>
      <div css={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", width: 250 }}>
        {[...Array(26).keys()].map((image, idx) => {
          const notImg = [].indexOf(idx) !== -1;
          return (
            !notImg && (
              <div
                key={`orig-image-order-${idx + 1}`}
                css={{
                  width: 50,
                  height: 50,
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(./images/beeCreative${idx + 1}.jpg)`,
                  backgroundPosition: "center",

                  color: "blue",
                  fontSize: 48,
                }}
              >
                {idx + 1}
              </div>
            )
          );
        })}
      </div>
      <QuiltSection />
    </main>
  );
}

export default App;
