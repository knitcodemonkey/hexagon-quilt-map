import React from "react";
import PropTypes from "prop-types";
import Hexagons from "./shapes/Hexagon";
import Squares from "./shapes/Square";
import IsoscelesTriangles from "./shapes/IsoscelesTriangle";
import RightTriangles from "./shapes/RightTriangle";

const QuiltSection = props => {
  const { shape } = props;

  console.log(shape);

  switch (shape) {
    case "Square":
      return <Squares {...props} />;
    case "IsoscelesTriangle":
      return <IsoscelesTriangles {...props} />;
    case "RightTriangle":
      return <RightTriangles {...props} />;
    default:
      return <Hexagons {...props} />;
  }
};

QuiltSection.propTypes = {
  setCounts: PropTypes.func,
  quiltSectionWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  quiltSectionHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fabric: PropTypes.string,
  shape: PropTypes.string,
  changeOneFabric: PropTypes.func,
  fabricSelected: PropTypes.number,
};

export default QuiltSection;
