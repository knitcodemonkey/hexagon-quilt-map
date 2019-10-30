import React, { useState } from "react";
import "./App.css";
import QuiltSection from "./components/QuiltSection";
import FabricKey from "./components/FabricKey";

const Subtitle = ({ title, description }) => (
  <p
    css={{
      margin: 10,
      padding: 0,
      fontSize: "1.2rem"
    }}
  >
    <span css={{ fontWeight: "bold" }}>{title}</span> {description}
  </p>
);

const FormItem = ({ label, children }) => {
  return (
    <label
      css={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10
      }}
    >
      <p css={{ margin: 0, padding: 0, width: 200, textAlign: "right" }}>
        {label}
      </p>
      {children}
    </label>
  );
};

function App() {
  // Find out number of instances
  let counts = {};
  const hueWidth = 5;
  const [quiltSectionWidth, setQuiltSectionWidth] = useState(18);
  const [quiltSectionHeight, setQuiltSectionHeight] = useState(7);
  const [fabric, setFabric] = useState("beeCreative");
  const [shape, setShape] = useState("Hexagon");

  const setCounts = imgNum => {
    counts[imgNum] = (counts[imgNum] || 0) + 1;
  };

  const [debug, setDebug] = useState(false);

  return (
    <main className="App">
      <header
        css={{
          margin: "20px auto",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "94vw",
          flexWrap: "wrap"
        }}
      >
        <div>
          <h1>Hexagon Quilt Randomizer</h1>
          <div>
            <Subtitle
              title="Website:"
              description={
                <a href="https://knitcodemonkey.github.io/hexagon-quilt-map/">
                  https://knitcodemonkey.github.io/hexagon-quilt-map/
                </a>
              }
            />
            <Subtitle
              title="Github:"
              description={
                <a href="https://github.com/knitcodemonkey/hexagon-quilt-map">
                  https://github.com/knitcodemonkey/hexagon-quilt-map
                </a>
              }
            />
          </div>
        </div>

        <form css={{ minWidth: 500 }}>
          <FormItem label="Generated Width:">
            <select
              value={quiltSectionWidth}
              onChange={event => setQuiltSectionWidth(event.target.value)}
            >
              {[...Array(30).keys()].map(num => {
                return (
                  <option key={`wide-${num + 1}`} value={num + 1}>
                    {num + 1}
                  </option>
                );
              })}
            </select>
          </FormItem>

          <FormItem label="Generated Height:">
            <select
              value={quiltSectionHeight}
              onChange={event => setQuiltSectionHeight(event.target.value)}
            >
              {[...Array(30).keys()].map(num => {
                return (
                  <option key={`tall-${num + 1}`} value={num + 1}>
                    {num + 1}
                  </option>
                );
              })}
            </select>
          </FormItem>

          <FormItem label="Fabric:">
            <select
              value={fabric}
              onChange={event => setFabric(event.target.value)}
            >
              <option value={"beeCreative"}>
                "Bee Creative" by Deb Strain
              </option>
            </select>
          </FormItem>

          <FormItem label="Geometrical Form used:">
            <select
              value={shape}
              onChange={event => setShape(event.target.value)}
            >
              <option value={"Hexagon"}>Hexagon</option>
              <option value={"Square"}>Square</option>
            </select>
          </FormItem>

          <FormItem label="Show Image Number:">
            <select value={debug} onChange={() => setDebug(!debug)}>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </FormItem>
        </form>
      </header>

      <article
        css={{
          borderTop: "1px solid rgba(0, 0, 0, 0.3)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
          paddingBottom: "56px",
          margin: "0 auto"
        }}
      >
        <QuiltSection
          setCounts={setCounts}
          hueWidth={hueWidth}
          quiltSectionWidth={quiltSectionWidth}
          quiltSectionHeight={quiltSectionHeight}
          debug={debug}
          fabric={fabric}
          shape={shape}
        />
      </article>

      <footer
        css={{
          marginTop: 40,
          marginBottom: 40
        }}
      >
        <FabricKey counts={counts} hueWidth={hueWidth} fabric={fabric} />
      </footer>
    </main>
  );
}

export default App;
