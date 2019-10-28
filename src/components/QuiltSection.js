import React from "react";
import PropTypes from 'prop-types';
import Hexagon from "./Hexagon";
import getRandomInt from "./util";

const QuiltSection = ({ setCounts, hueWidth, quiltSectionWidth, quiltSectionHeight, debug }) => {
  // array of objects
  let imageList = [];
  // single object
  let prevImage = "";
  let prevPrevImage = "";
  let prevHue = "";

  const notColors = [25];

  // get random image
  const getImage = (rowWidth, idx) => {

    // get 3 hexis touching top of current hexi
    const lastRow = [imageList[idx - rowWidth - 1], imageList[idx - rowWidth], imageList[idx - rowWidth + 1]];
    const lastRowValue = [lastRow[0] % hueWidth, lastRow[1] % hueWidth, lastRow[2] % hueWidth];

    // Set default random values
    let randImgNum = 1;
    let randImageHue = randImgNum % hueWidth;
    let sameAsLastRow = true;
    let sameAsLastRowHue = true;

    do {
      // Get random values
      randImgNum = getRandomInt(1, 27);
      randImageHue = randImgNum % hueWidth;

      // set params for easier "while" use
      sameAsLastRow = lastRow.indexOf(randImgNum) > -1;
      sameAsLastRowHue = lastRowValue.indexOf(randImageHue) > -1;

    } while (
      notColors.indexOf(randImgNum) > -1 ||
      randImgNum === prevImage ||
      randImageHue === prevHue ||
      randImgNum === prevPrevImage ||
      // randImageHue === prevPrevHue || // This is, apparently, impossible without breaking a chrome tab
      sameAsLastRow ||
      sameAsLastRowHue
    );

    // increment all the values for the next loop
    prevPrevImage = prevImage;
    prevImage = randImgNum;
    prevHue = randImageHue;
    imageList.push(randImgNum);
    setCounts(randImgNum);

    return randImgNum;
  };

  return (
    <div
      className="Quilt"
      css={{
        width: quiltSectionWidth * 85,
        display: "grid",
        gridTemplateColumns: `repeat(${quiltSectionWidth}, 85px)`,
        gridTemplateRows: `repeat(${quiltSectionHeight}, 100px)`,
        margin: "20px auto",
        paddingTop: 20,
        paddingBottom: 20,  
        paddingRight: 30,
        
      }}
    >
      {[...Array(quiltSectionWidth * quiltSectionHeight).keys()].map((num, idx) => {
        const hexiImage = getImage(quiltSectionWidth, idx);
        return <Hexagon key={`hexi-key-${num}`} idx={idx} image={hexiImage} debug={debug} />;
      })}
    </div>
  );
};

QuiltSection.propTypes = {
  setCounts: PropTypes.func, 
  hueWidth: PropTypes.number, 
  quiltSectionWidth: PropTypes.number, 
  quiltSectionHeight: PropTypes.number, 
  debug: PropTypes.bool
}

export default QuiltSection;
