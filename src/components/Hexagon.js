import React from "react";
import PropTypes from "prop-types";
import { relative } from "path";

const Hexagon = ({ image, idx, fabric, debug }) => {
  return (
    <div
      css={{
        position: "relative",
        clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        overflow: "hidden",
        width: 115,
        height: 102,
        margin: `0 0 0 -27px`,
        backgroundRepeat: "repeat",
        backgroundImage: `url(./images/${fabric}/${fabric}${image}.jpg)`,
        backgroundPosition: "center",

        ":nth-child(even)": {
          marginTop: 50,
        },
      }}
    >
      {debug === true && (
        <div
          css={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            css={{
              width: "100%",
              zIndex: 10,
              color: "blue",
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "center",
              backgroundColor: "rgba(255, 255, 255, 0.6)",
            }}
          >{`${image}`}</div>
        </div>
      )}
    </div>
  );
};

Hexagon.propTypes = {
  image: PropTypes.number,
  idx: PropTypes.number,
  fabric: PropTypes.string,
  debug: PropTypes.bool,
};

export default Hexagon;
