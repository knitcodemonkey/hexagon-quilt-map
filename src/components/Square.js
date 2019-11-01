import React from "react";
import PropTypes from "prop-types";
import theme from "../theme";

const Square = props => {
  const { image, idx, fabric, quiltSectionWidth, changeOneFabric, fabricSelected } = props;
  return (
    <div
      css={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        width: `calc(94vw / ${quiltSectionWidth})`,
        height: `calc(94vw / ${quiltSectionWidth})`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        backgroundImage: `url(./images/${fabric}/${fabric}${image}.jpg)`,
      }}
    >
      {fabricSelected && (
        <div
          css={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button onClick={() => changeOneFabric(idx)}>{image}</button>
        </div>
      )}
    </div>
  );
};

Square.propTypes = {
  image: PropTypes.number,
  idx: PropTypes.number,
  fabric: PropTypes.string,
  quiltSectionWidth: PropTypes.number,
  quiltSectionHeight: PropTypes.number,
  changeOneFabric: PropTypes.func,
  fabricSelected: PropTypes.number,
};

const Squares = props => {
  const { quiltSectionHeight, quiltSectionWidth, imageList } = props;
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
        return <Square key={`square-key-${image}-${idx}`} idx={idx} image={image} {...props} />;
      })}
    </div>
  );
};

Squares.propTypes = {
  imageList: PropTypes.array,
  quiltSectionWidth: PropTypes.number,
  quiltSectionHeight: PropTypes.number,
  fabric: PropTypes.string,
  changeOneFabric: PropTypes.func,
  fabricSelected: PropTypes.number,
};

export default Squares;
