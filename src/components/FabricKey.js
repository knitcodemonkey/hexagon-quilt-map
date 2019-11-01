import React from "react";
import PropTypes from "prop-types";
import specs from "../utils/specs";

const FabricKey = ({ counts, fabric, selectFabric, fabricSelected }) => {
  const { fabricCount, notImage, hueWidth } = specs[fabric];
  const gridTemplateColumns = `repeat(${hueWidth}, calc(94vw / ${hueWidth}))`;

  return (
    <aside
      css={{
        margin: "auto",
        padding: "1px 20px 20px 20px",
        width: "94vw",
        backgroundColor: "#fff",
        borderRadius: "5px",
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      <h2>Color Key</h2>

      {/** Hue Headers */}
      <div
        css={{
          display: "grid",
          gridTemplateColumns: gridTemplateColumns,
          width: "94vw",
          fontWeight: "bold",
          fontSize: 24,
        }}
      >
        {[...Array(hueWidth).keys()].map(idx => {
          return (
            <div
              key={`Hue-Header-${(idx + 1) % hueWidth}`}
              css={{ borderBottom: "1px solid grey", marginBottom: 10, paddingBottom: 10 }}
            >{`Hue: ${(idx + 1) % hueWidth || hueWidth}`}</div>
          );
        })}
      </div>

      {/** Images */}
      <div css={{ display: "grid", gridTemplateColumns: gridTemplateColumns }}>
        {[...Array(fabricCount).keys()].map(idx => {
          const notImg = notImage.indexOf(idx + 1) !== -1;

          return (
            <div css={{ marginBottom: 6 }} key={`Image-${idx + 1}`}>
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
                    0} uses`}</span>
                </div>
              )}
              <div
                key={`orig-image-order-${idx + 1}`}
                id={`orig-image-order-${idx + 1}`}
                css={{
                  width: gridTemplateColumns,
                  height: 100,
                  backgroundRepeat: "repeat",
                  margin: `0 10px`,
                  backgroundImage: `url(./images/${fabric}/${fabric}${idx + 1}.jpg)`,
                  backgroundPosition: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              >
                {!notImg && (
                  <button
                    css={{ width: "100%", margin: 0, padding: 5, fontSize: "0.9rem" }}
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
