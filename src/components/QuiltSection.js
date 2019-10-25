import React from "react";
import Hexagon from "./Hexagon";
import getRandomInt from "./util";

const QuiltSection = () => {
  const imageList = [];
  let prevImage = "";

  const getImage = (rowWidth, idx) => {
    const lastRow = [imageList[idx - rowWidth - 1], imageList[idx - rowWidth], imageList[idx - rowWidth + 1]];

    let randImgNum = 1;

    do {
      randImgNum = getRandomInt(1, 26);
    } while (randImgNum === prevImage || lastRow.indexOf(randImgNum) > -1);

    prevImage = randImgNum;

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
        imageList.push(hexiImage);
        return <Hexagon key={`hexi-key-${num}`} idx={idx} image={hexiImage} />;
      })}
    </div>
  );
};

export default QuiltSection;
