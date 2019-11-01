import React from "react";
import PropTypes from "prop-types";

const Square = ({ image, idx, fabric, debug, quiltSectionWidth, changeOneFabric, fabricSelected }) => {
  console.log(fabricSelected);
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
      {(debug || fabricSelected) && (
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
  debug: PropTypes.bool,
  quiltSectionWidth: PropTypes.number,
  changeOneFabric: PropTypes.func,
  fabricSelected: PropTypes.number,
};

const Squares = ({
  quiltSectionHeight,
  quiltSectionWidth,
  debug,
  fabric,
  imageList,
  changeOneFabric,
  fabricSelected,
}) => {
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
            idx={idx}
            image={image}
            debug={debug}
            fabric={fabric}
            changeOneFabric={changeOneFabric}
            fabricSelected={fabricSelected}
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
  changeOneFabric: PropTypes.func,
  fabricSelected: PropTypes.number,
};

export default Squares;
