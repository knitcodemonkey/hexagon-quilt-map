import React from "react";
import PropTypes from "prop-types";
import theme from "../../theme";

const Hexagon = props => {
  const { image, idx, fabric, quiltSectionWidth, changeOneFabric, fabricSelected } = props;

  // if even number wide, true.
  // if not even number wide, make even every other row.
  const isEven = quiltSectionWidth % 2 === 0 || Math.floor(idx / quiltSectionWidth) % 2 === 0;

  return (
    <div
      css={[
        {
          overflow: "hidden",
          position: "relative",
          clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          width: `calc(125vw / ${quiltSectionWidth} - 1px)`,
          height: `calc(8 / 9 * (125vw / ${quiltSectionWidth}) - 1px)`,
          backgroundRepeat: "repeat",
          backgroundImage: `url(./images/${fabric}/${fabric}${image}.jpg)`,
          backgroundPosition: "center",
          marginTop: `calc((-8 / 9 * 125vw / ${quiltSectionWidth}) / 2)`,
        },
        isEven
          ? {
              "&:nth-of-type(odd)": {
                marginTop: 0,
              },
            }
          : {
              "&:nth-of-type(even)": {
                marginTop: 0,
              },
            },
      ]}
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

Hexagon.propTypes = {
  image: PropTypes.number,
  idx: PropTypes.number,
  fabric: PropTypes.string,
  quiltSectionWidth: PropTypes.number,
  quiltSectionHeight: PropTypes.number,
  changeOneFabric: PropTypes.func,
  fabricSelected: PropTypes.number,
};

const Hexagons = props => {
  const { quiltSectionHeight, quiltSectionWidth, imageList } = props;
  let heightMeasurement = `8 / 9 * (125vw / ${quiltSectionWidth})`;

  return (
    <div
      className="Quilt"
      css={{
        overflow: "hidden",
        width: theme.breakpoints[0],
        display: "grid",
        gridTemplateColumns: `repeat(${quiltSectionWidth}, calc(${theme.breakpoints[0]} / ${quiltSectionWidth} ))`,
        gridTemplateRows: `repeat(${quiltSectionHeight - 1}, calc(${heightMeasurement}))`,
        margin: "40px auto -16px auto",
        paddingRight: `calc(${theme.breakpoints[0]} / ${quiltSectionWidth} / 3)`,
        maxHeight: `calc(${heightMeasurement} * ${quiltSectionHeight - 1})`,
      }}
    >
      {imageList.map((image, idx) => {
        return <Hexagon key={`hexi-key-${image}-${idx}`} idx={idx} image={image} {...props} />;
      })}
    </div>
  );
};

Hexagons.propTypes = {
  imageList: PropTypes.array,
  quiltSectionWidth: PropTypes.number,
  quiltSectionHeight: PropTypes.number,
  fabric: PropTypes.string,
  changeOneFabric: PropTypes.func,
  fabricSelected: PropTypes.number,
};

export default Hexagons;
