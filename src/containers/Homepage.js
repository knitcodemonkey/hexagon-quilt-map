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
    newImageList[imageIndex] = fabricSelected;

    setImageList(newImageList);
    setImageCounts(getImageCounts());

    updateImageList(generateAllImages({ quiltSectionWidth, quiltSectionHeight, fabric }));
  };

  useEffect(() => {
    updateImageList(generateAllImages({ quiltSectionWidth, quiltSectionHeight, fabric }));
  }, [quiltSectionWidth, quiltSectionHeight, fabric]);

  return (
    <main className="Homepage">
      <header>
        <h1 css={{ margin: 0, paddingTop: 20 }}>Quilt Fabric Randomizer</h1>
        <Subtitle description="by Jen Luker" />
      </header>

      <div
        css={{
          boxShadow: "0 0 4px rgba(0, 0, 0, 0.3)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
          width: "100%",
          marginTop: 20,
          padding: "20px auto 10px auto",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-end",
          flexWrap: "wrap",
          backgroundColor: "#fff",
        }}
      >
        <div css={{ minWidth: 360 }}>
          <div
            css={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              margin: `0 auto`,
            }}
          >
            <Subtitle description={<a href="https://knitcodemonkey.github.io/hexagon-quilt-map/">Go to Website</a>} />
            <Subtitle description={<a href="https://github.com/knitcodemonkey/hexagon-quilt-map">See on Github</a>} />
          </div>
          <button
            css={{ margin: `10px auto` }}
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
        </div>

        <form css={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
          <div>
            <FormField label="Shape:">
              <select value={shape} onChange={event => setShape(event.target.value)}>
                <option value={"Hexagon"}>Hexagon</option>
                <option value={"Square"}>Square</option>
              </select>
            </FormField>

            <FormField label="Fabric:">
              <select value={fabric} onChange={event => setFabric(event.target.value)}>
                <option value={"beeCreative"}>Bee Creative</option>
              </select>
            </FormField>
          </div>
          <div>
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
          </div>
        </form>
      </div>

      <article
        css={{
          paddingBottom: "56px",
          margin: "0 auto",
        }}
      >
        <QuiltSection
          key={`QuiltSection-${imageList.length}-${fabricSelected}`}
          quiltSectionWidth={quiltSectionWidth}
          quiltSectionHeight={quiltSectionHeight}
          fabric={fabric}
          shape={shape}
          imageList={imageList}
          changeOneFabric={changeOneFabric}
          fabricSelected={fabricSelected}
        />
      </article>

      <footer
        css={{
          borderTop: "1px solid rgba(0, 0, 0, 0.3)",
          boxShadow: "0 0 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        <FabricKey counts={counts} fabric={fabric} selectFabric={selectFabric} fabricSelected={fabricSelected} />
      </footer>
    </main>
  );
}

export default Homepage;
