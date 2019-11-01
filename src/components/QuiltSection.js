import React from "react";
import PropTypes from "prop-types";
import Hexagons from "./Hexagon";
import Squares from "./Square";

const QuiltSection = ({
  imageList,
  quiltSectionWidth,
  quiltSectionHeight,
  fabric,
  debug,
  shape,
  changeOneFabric,
  fabricSelected,
}) => {
  if (shape === "Hexagon") {
    return (
      <Hexagons
        imageList={imageList}
        quiltSectionWidth={quiltSectionWidth}
        quiltSectionHeight={quiltSectionHeight}
        debug={debug}
        fabric={fabric}
        changeOneFabric={changeOneFabric}
        fabricSelected={fabricSelected}
      />
    );
  } else {
    return (
      <Squares
        imageList={imageList}
        quiltSectionWidth={quiltSectionWidth}
        quiltSectionHeight={quiltSectionHeight}
        debug={debug}
        fabric={fabric}
        changeOneFabric={changeOneFabric}
        fabricSelected={fabricSelected}
      />
    );
  }
};

QuiltSection.propTypes = {
  setCounts: PropTypes.func,
  quiltSectionWidth: PropTypes.number,
  quiltSectionHeight: PropTypes.number,
  fabric: PropTypes.string,
  debug: PropTypes.bool,
  shape: PropTypes.string,
  changeOneFabric: PropTypes.func,
  fabricSelected: PropTypes.number,
};

export default QuiltSection;
