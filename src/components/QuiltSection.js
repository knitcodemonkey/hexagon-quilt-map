import React from "react";
import Hexagon from "./Hexagon";
import getRandomInt from "./util";

const QuiltSection = () => {
  // array of objects
  const imageList = [];

  // single object
  let prevImage = "";
  let prevHue = "";

  // get random image
  const getImage = (rowWidth, idx) => {
    const lastRow = [imageList[idx - rowWidth - 1], imageList[idx - rowWidth], imageList[idx - rowWidth + 1]];
    const lastRowValue = [lastRow[0] % 7, lastRow[1] % 7, lastRow[2] % 7];

    let randImgNum = 1;
    let randImageHue = randImgNum % 5;

    let sameAsLastRow = true;
    let sameAsLastRowHue = true;

    const notColors = [4, 12, 25];

    do {
      randImgNum = getRandomInt(0, 28);
      randImageHue = randImgNum % 7;

      sameAsLastRow = lastRow.indexOf(randImgNum) > -1;
      sameAsLastRowHue = lastRowValue.indexOf(randImageHue) > -1;

      // if (randImgNum !== prevImage && randImageHue !== prevHue && !sameAsLastRow && !sameAsLastRowHue) {
      //   console.log("*** Previos Info ***");
      //   console.log({ prevImage, prevHue, lastRow, lastRowValue });
      //   console.log("*** current Info ***");
      //   console.log({ randImgNum, randImageHue });
      // }
    } while (
      notColors.indexOf(randImgNum) > -1 ||
      randImgNum.indexOfrandImgNum === prevImage ||
      randImageHue === prevHue ||
      sameAsLastRow ||
      sameAsLastRowHue
    );

    prevImage = randImgNum;
    prevHue = randImageHue;
    imageList.push(randImgNum);

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
