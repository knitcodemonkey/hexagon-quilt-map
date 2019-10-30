import React from "react";
import PropTypes from "prop-types";
import Hexagon from "./Hexagon";
import Square from "./Square";

const QuiltSection = ({ imageList, quiltSectionWidth, quiltSectionHeight, fabric, debug, shape }) => {
  return (
    <div
      className="Quilt"
      css={{
        width: "94vw",
        display: "grid",
        gridTemplateColumns: `repeat(${quiltSectionWidth}, calc(94vw / ${quiltSectionWidth} ))`,
        gridTemplateRows: `repeat(${quiltSectionHeight}, calc(8 * (125vw / ${quiltSectionWidth}) / 9))`,
        margin: "20px auto",
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 30
      }}
    >
      {imageList.map(
        (num, idx) => {
          const hexiImage = getImage(quiltSectionWidth, idx);
          if (shape === "Hexagon")
            return (
              <Hexagon
                key={`hexi-key-${num}-${idx}`}
                quiltSectionWidth={quiltSectionWidth}
                idx={idx}
                image={hexiImage}
                debug={debug}
                fabric={fabric}
              />
            );
          else
            return (
              <Square
                key={`hexi-key-${num}`}
                quiltSectionWidth={quiltSectionWidth}
                idx={idx}
                image={hexiImage}
                debug={debug}
                fabric={fabric}
              />
            );
        }
      )}

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
  shape: PropTypes.string
};

export default QuiltSection;
