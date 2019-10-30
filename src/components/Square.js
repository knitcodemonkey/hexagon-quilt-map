import React from "react";
import PropTypes from "prop-types";

const Square = ({ image, idx, fabric, debug, quiltSectionWidth }) => {
  // if even number wide, true.
  // if not even number wide, make even every other row.
  //   const isEven =
  //     quiltSectionWidth % 2 === 0 ||
  //     Math.floor(idx / quiltSectionWidth) % 2 === 0;
  return (
    <div
      css={[
        {
          overflow: "hidden",
          position: "relative",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          width: `calc(125vw / ${quiltSectionWidth})`,
          height: `calc((8 * (125vw / ${quiltSectionWidth})) / 9)`,
          margin: 0,
          backgroundRepeat: "repeat",
          backgroundImage: `url(./images/${fabric}/${fabric}${image}.jpg)`,
          backgroundPosition: "center",
          marginTop: `calc((8 * 125vw / ${quiltSectionWidth}) / 9 / 2)`
        }
      ]}
    >
      {debug === true && (
        <div
          css={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
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
              backgroundColor: "rgba(255, 255, 255, 0.6)"
            }}
          >{`${image}`}</div>
        </div>
      )}
    </div>
  );
};

Square.propTypes = {
  image: PropTypes.number,
  idx: PropTypes.number,
  fabric: PropTypes.string,
  debug: PropTypes.bool,
  quiltSectionWidth: PropTypes.number
};

export default Square;
