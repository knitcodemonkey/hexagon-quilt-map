import React from "react";
import Hexagon from "./Hexagon";
import getRandomInt from "./util";

const QuiltSection = ({ setCounts, hueWidth }) => {
  // array of objects
  let imageList = [];
  // single object
  let prevImage,
    prevPrevImage = "";
  let prevHue = "";

  const notColors = [25];

  // get random image
  const getImage = (rowWidth, idx) => {
    const lastRow = [imageList[idx - rowWidth - 1], imageList[idx - rowWidth], imageList[idx - rowWidth + 1]];
    const lastRowValue = [lastRow[0] % hueWidth, lastRow[1] % hueWidth, lastRow[2] % hueWidth];

    let randImgNum = 1;
    let randImageHue = randImgNum % hueWidth;

    let sameAsLastRow = true;
    let sameAsLastRowHue = true;

    do {
      randImgNum = getRandomInt(1, 27);
      randImageHue = randImgNum % hueWidth;

      sameAsLastRow = lastRow.indexOf(randImgNum) > -1;
      sameAsLastRowHue = lastRowValue.indexOf(randImageHue) > -1;

      // if (randImgNum !== prevImage && randImageHue !== prevHue && !sameAsLastRow && !sameAsLastRowHue) {
      //   console.log("*** Previos Info ***");
      //   console.log({ prevImage, prevHue, lastRow, lastRowValue });
      //   console.log("*** current Info ***");
      //   console.log({ randImgNum, randImageHue });
      //   console.log(randImgNum, prevHue, prevPrevHue);
      // }
    } while (
      notColors.indexOf(randImgNum) > -1 ||
      randImgNum === prevImage ||
      randImageHue === prevHue ||
      randImgNum === prevPrevImage ||
      // randImageHue === prevPrevHue || // This is, apparently, impossible without breaking a chrome tab
      sameAsLastRow ||
      sameAsLastRowHue
    );

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
        display: "grid",
        gridTemplateColumns: "repeat(18, 85px)",
        gridTemplateRows: "repeat(7, 100px)",
        margin: "20px 0",
      }}
    >
      {[...Array(18 * 7).keys()].map((num, idx) => {
        const hexiImage = getImage(18, idx);
        return <Hexagon key={`hexi-key-${num}`} idx={idx} image={hexiImage} />;
      })}
    </div>
  );
};

export default QuiltSection;
