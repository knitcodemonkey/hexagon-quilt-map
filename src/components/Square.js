import React from "react";
import PropTypes from "prop-types";

const Square = ({ image, fabric, debug, quiltSectionWidth }) => {
  return (
    <div
      css={[
        {
          overflow: "hidden",
          position: "relative",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          width: `calc(94vw / ${quiltSectionWidth})`,
          height: `calc(94vw / ${quiltSectionWidth})`,
          margin: 0,
          backgroundRepeat: "repeat",
          backgroundImage: `url(./images/${fabric}/${fabric}${image}.jpg)`,
          backgroundPosition: "center",
        },
      ]}
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

Square.propTypes = {
  image: PropTypes.number,
  idx: PropTypes.number,
  fabric: PropTypes.string,
  debug: PropTypes.bool,
  quiltSectionWidth: PropTypes.number,
};

const Squares = ({ quiltSectionHeight, quiltSectionWidth, debug, fabric, imageList }) => {
  return (
    <div
      className="Quilt"
      css={{
        overflow: "hidden",
        width: "94vw",
        display: "grid",
        gridTemplateColumns: `repeat(${quiltSectionWidth}, calc(94vw / ${quiltSectionWidth}))`,
        gridTemplateRows: `repeat(${quiltSectionHeight - 1}, calc(94vw / ${quiltSectionWidth}))`,
        margin: "40px auto -15px auto",
        maxHeight: `calc(94vw / ${quiltSectionWidth} * ${quiltSectionHeight - 1})`,
      }}
    >
      {imageList.map((image, idx) => {
        return (
          <Square
            key={`square-key-${image}-${idx}`}
            quiltSectionWidth={quiltSectionWidth}
            quiltSectionHeight={quiltSectionHeight}
            image={image}
            debug={debug}
            fabric={fabric}
          />
        );
      })}
    </div>
  );
};

Squares.propTypes = {
  imageList: PropTypes.array,
  quiltSectionWidth: PropTypes.number,
  quiltSectionHeight: PropTypes.number,
  fabric: PropTypes.string,
  debug: PropTypes.bool,
};

export default Squares;
