import React from "react";
import PropTypes from "prop-types";

const FabricKey = ({ counts, hueWidth, fabric }) => {
  const width = hueWidth * 120;

  return (
    <aside
      css={{
        margin: "auto",
        padding: "1px 20px 20px 20px",
        width: width,
        backgroundColor: "#fff",
        borderRadius: "5px",
        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      <h2>Color Key</h2>

      <div
        css={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 120px)",
          width: width,
          fontWeight: "bold",
          fontSize: 24,
        }}
      >
        {[...Array(5).keys()].map((image, idx) => {
          return (
            <div
              key={`Hue-${(idx + 1) % hueWidth}`}
              css={{ borderBottom: "1px solid grey", marginBottom: 10, paddingBottom: 10 }}
            >{`Hue: ${(idx + 1) % hueWidth}`}</div>
          );
        })}
      </div>

      <div css={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
        {[...Array(26).keys()].map((image, idx) => {
          const notImg = [25].indexOf(idx + 1) !== -1;

          const count = counts[idx + 1] || 0;

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
                  <span css={{ color: (count < 4 || count > 6) && "red" }}>{`${counts[idx + 1] || 0} Hexis`}</span>
                </div>
              )}
              <div
                key={`orig-image-order-${idx + 1}`}
                css={{
                  width: 120,
                  height: 50,
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(./images/${fabric}/${fabric}${idx + 1}.jpg)`,
                  backgroundPosition: "center",
                }}
              />
            </div>
          );
        })}
      </div>
    </aside>
  );
};

FabricKey.propTypes = {
  counts: PropTypes.array,
  hueWidth: PropTypes.number,
  fabric: PropTypes.string,
};

export default FabricKey;
