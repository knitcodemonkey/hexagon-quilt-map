import React from "react";
import PropTypes from "prop-types";
import specs from "../utils/specs";

const FabricKey = ({ counts, fabric, selectFabric, fabricSelected, availableFabricCounts }) => {
  const { fabricCount, notImage, hueWidth } = specs[fabric];
  const gridTemplateColumns = `calc(94vw / ${hueWidth} - 10px)`;

  return (
    <aside
      css={{
        margin: 0,
        padding: 20,
        width: "calc(100% - 40px)",
        backgroundColor: "#fff",
      }}
    >
      <h2 css={{ margin: 0, marginBottom: 20, padding: 0 }}>Color Key</h2>

      {/** Hue Headers */}
      <div
        css={{
          display: "flex",
          justifyContent: "space-around",
          fontWeight: "bold",
          fontSize: 24,
          margin: 0,
        }}
      >
        {[...Array(hueWidth).keys()].map(idx => {
          return (
            <div
              key={`Hue-Header-${(idx + 1) % hueWidth}`}
              css={{ borderBottom: "1px solid grey", marginBottom: 10, paddingBottom: 10, width: "100%" }}
            >{`Hue: ${(idx + 1) % hueWidth || hueWidth}`}</div>
          );
        })}
      </div>

      {/** Images */}
      <div css={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        {[...Array(Math.ceil(fabricCount / hueWidth) * hueWidth).keys()].map(idx => {
          const notImg = notImage.indexOf(idx + 1) !== -1 || idx + 1 > fabricCount;

          return (
            <div css={{ marginBottom: 10 }} key={`Image-${idx + 1}`}>
              {!notImg && (
                <div
                  css={{
                    fontWeight: "bold",
                    fontSize: 16,
                    textShadow: "0px 0px 2px white",
                  }}
                >
                  <span>{`#${idx + 1}: `}</span>
                  <span css={{ color: (counts[idx + 1] < 4 || counts[idx + 1] > 6) && "red" }}>{`${counts[idx + 1] ||
                    0} uses`}</span>{' - '}
                    <span css={{ color: (availableFabricCounts[idx + 1] < 1) && "red" }}>{`${availableFabricCounts?.[idx + 1]} left`}</span>
                </div>
              )}
              <div
                key={`orig-image-order-${idx + 1}`}
                id={`orig-image-order-${idx + 1}`}
                css={{
                  width: gridTemplateColumns,
                  height: 100,
                  backgroundRepeat: "repeat",
                  backgroundImage: `url(./images/${fabric}/${fabric}${idx + 1}.jpg)`,
                  backgroundPosition: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  border: !notImg && "1px solid grey",
                }}
              >
                {!notImg && (
                  <button
                    css={{ width: "calc(100% + 2px)", margin: -1, padding: 5, fontSize: "0.9rem" }}
                    onClick={() => {
                      fabricSelected === idx + 1 ? selectFabric("") : selectFabric(idx + 1);
                    }}
                  >
                    {fabricSelected === idx + 1 ? "No more!" : "Choose me!"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

FabricKey.propTypes = {
  counts: PropTypes.object,
  hueWidth: PropTypes.number,
  fabric: PropTypes.string,
  fabricSelected: PropTypes.number,
  selectFabric: PropTypes.func,
};

export default FabricKey;
