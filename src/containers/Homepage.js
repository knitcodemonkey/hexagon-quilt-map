import React, { useState, useEffect } from "react";
import "./homepage.css";

import QuiltSection from "../components/QuiltSection";
import FabricKey from "../components/FabricKey";
import FormField from "../components/FormField";
import { regenerateAllImages, generateAllImages, getImageCounts, setImageList } from "../utils/generateImages";

const Subtitle = ({ title, description }) => (
  <p
    css={{
      margin: 10,
      padding: 0,
      fontSize: "1.2rem",
    }}
  >
    <span css={{ fontWeight: "bold" }}>{title}</span> {description}
  </p>
);

function Homepage() {
  // Find out number of instances
  const [counts, setImageCounts] = useState(getImageCounts());
  const [quiltSectionWidth, setQuiltSectionWidth] = useState(17);
  const [quiltSectionHeight, setQuiltSectionHeight] = useState(7);
  const [fabric, setFabric] = useState("beeCreative");
  const [shape, setShape] = useState("Hexagon");
  const [fabricSelected, selectFabric] = useState();
  const [imageList, updateImageList] = useState([]);

  const changeOneFabric = imageIndex => {
    let newImageList = Object.assign(imageList);
    console.log(newImageList[imageIndex]);

    newImageList[imageIndex] = fabricSelected;
    console.log(newImageList[imageIndex]);

    setImageList(newImageList);
    setImageCounts(getImageCounts());

    updateImageList(generateAllImages({ quiltSectionWidth, quiltSectionHeight, fabric }));
  };

  useEffect(() => {
    updateImageList(generateAllImages({ quiltSectionWidth, quiltSectionHeight, fabric }));
  }, [quiltSectionWidth, quiltSectionHeight, fabric]);

  const [debug, setDebug] = useState(false);

  return (
    <main className="Homepage">
      <header
        css={{
          margin: "20px auto",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "94vw",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1>Quilt Fabric Randomizer</h1>
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
          <FormField label="Generated Width:">
            <select
              value={quiltSectionWidth}
              onChange={event => {
                setQuiltSectionWidth(parseInt(event.target.value));
              }}
            >
              {[...Array(30).keys()].map(num => {
                return (
                  <option key={`wide-${num + 1}`} value={num + 1}>
                    {num + 1}
                  </option>
                );
              })}
            </select>
          </FormField>

          <FormField label="Generated Height:">
            <select
              value={quiltSectionHeight}
              onChange={event => {
                setQuiltSectionHeight(parseInt(event.target.value));
              }}
            >
              {[...Array(100).keys()].map(num => {
                return (
                  <option key={`tall-${num + 1}`} value={num + 1}>
                    {num}
                  </option>
                );
              })}
            </select>
          </FormField>

          <FormField label="Fabric:">
            <select value={fabric} onChange={event => setFabric(event.target.value)}>
              <option value={"beeCreative"}>"Bee Creative" by Deb Strain</option>
            </select>
          </FormField>

          <FormField label="Geometrical Form used:">
            <select value={shape} onChange={event => setShape(event.target.value)}>
              <option value={"Hexagon"}>Hexagon</option>
              <option value={"Square"}>Square</option>
            </select>
          </FormField>

          <FormField label="Show Image Number:">
            <select value={debug} onChange={() => setDebug(!debug)}>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </FormField>

          <button
            type="button"
            onClick={() => {
              const newImageList = regenerateAllImages({
                quiltSectionWidth,
                quiltSectionHeight,
                fabric,
              });
              updateImageList(newImageList);

              setImageCounts(getImageCounts());
            }}
          >
            Randomize Fabric Placement
          </button>
        </form>
      </header>

      <article
        css={{
          borderTop: "1px solid rgba(0, 0, 0, 0.3)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
          paddingBottom: "56px",
          margin: "0 auto",
        }}
      >
        <QuiltSection
          key={`QuiltSection-${imageList.length}-${fabricSelected}`}
          quiltSectionWidth={quiltSectionWidth}
          quiltSectionHeight={quiltSectionHeight}
          debug={debug}
          fabric={fabric}
          shape={shape}
          imageList={imageList}
          changeOneFabric={changeOneFabric}
          fabricSelected={fabricSelected}
        />
      </article>

      <footer
        css={{
          marginTop: 40,
          marginBottom: 40,
        }}
      >
        <FabricKey counts={counts} fabric={fabric} selectFabric={selectFabric} fabricSelected={fabricSelected} />
      </footer>
    </main>
  );
}

export default Homepage;
