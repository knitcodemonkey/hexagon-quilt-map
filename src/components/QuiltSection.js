import React from "react";
import PropTypes from "prop-types";
import Hexagon from "./Hexagon";
import Square from "./Square";

const QuiltSection = ({ imageList, quiltSectionWidth, quiltSectionHeight, fabric, debug, shape }) => {
  const gridDetails = shape => {
    let gridTemplateColumns = `repeat(${quiltSectionWidth}, calc(94vw / ${quiltSectionWidth} ))`;
    let gridTemplateRows = `repeat(${quiltSectionHeight}, calc(8 * (125vw / ${quiltSectionWidth}) / 9))`;

    switch (shape.toLowerCase()) {
      case "square":
        gridTemplateRows = `repeat(${quiltSectionHeight}, calc(94vw / ${quiltSectionWidth} ))`;
        break;
      default:
        gridTemplateColumns = `repeat(${quiltSectionWidth}, calc(94vw / ${quiltSectionWidth} ))`;
        gridTemplateRows = `repeat(${quiltSectionHeight}, calc(8 * (125vw / ${quiltSectionWidth}) / 9))`;
    }

    return { gridTemplateColumns, gridTemplateRows };
  };

  const { gridTemplateColumns, gridTemplateRows } = gridDetails(shape);

  return (
    <div
      className="Quilt"
      css={{
        width: "94vw",
        display: "grid",
        gridTemplateColumns: gridTemplateColumns,
        gridTemplateRows: gridTemplateRows,
        margin: "20px auto",
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 30,
      }}
    >
      {imageList.map((image, idx) => {
        if (shape === "Hexagon")
          return (
            <Hexagon
              key={`hexi-key-${image}-${idx}`}
              quiltSectionWidth={quiltSectionWidth}
              quiltSectionHeight={quiltSectionHeight}
              idx={idx}
              image={image}
              debug={debug}
              fabric={fabric}
            />
          );
        else
          return (
            <Square
              key={`square-key-${image}-${idx}`}
              quiltSectionWidth={quiltSectionWidth}
              quiltSectionHeight={quiltSectionHeight}
              idx={idx}
              image={image}
              debug={debug}
              fabric={fabric}
            />
          );
      })}
    </div>
  );
};

QuiltSection.propTypes = {
  setCounts: PropTypes.func,
  hueWidth: PropTypes.number,
  quiltSectionWidth: PropTypes.number,
  quiltSectionHeight: PropTypes.number,
  fabric: PropTypes.string,
  debug: PropTypes.bool,
  shape: PropTypes.string,
};

export default QuiltSection;
