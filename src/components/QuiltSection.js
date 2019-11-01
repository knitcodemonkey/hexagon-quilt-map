import React from "react";
import PropTypes from "prop-types";
import Hexagons from "./Hexagon";
import Squares from "./Square";

const QuiltSection = props => {
  const { shape } = props;
  if (shape === "Hexagon") {
    return <Hexagons {...props} />;
  } else {
    return <Squares {...props} />;
  }
};

QuiltSection.propTypes = {
  setCounts: PropTypes.func,
  quiltSectionWidth: PropTypes.number,
  quiltSectionHeight: PropTypes.number,
  fabric: PropTypes.string,
  shape: PropTypes.string,
  changeOneFabric: PropTypes.func,
  fabricSelected: PropTypes.number,
};

export default QuiltSection;
