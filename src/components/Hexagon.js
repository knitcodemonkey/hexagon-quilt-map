import React from "react";
import PropTypes from "prop-types";
import { css, jsx } from "@emotion/core";
import getRandomInt from "./util";

const images = [...Array(4).keys()]
  .map((hkey, hidx) => {
    const h = `${-hidx * 114 - 1}px`;
    const w = [...Array(6).keys()].map((wkey, widx) => {
      return `${-widx * 114 + 55}px ${h}`;
    });

    return w.join();
  })
  .join()
  .split(",");

console.log(images);

const Hexagon = ({ idx }) => {
  return (
    <div
      css={{
        overflow: "hidden",
        visibility: "hidden",
        transform: "rotate(120deg)",
        width: 225,
        height: 100,
        margin: `0 0 0 -55px`,
        ":nth-child(even)": {
          marginTop: 50,
        },
      }}
    >
      <div
        css={{
          overflow: "hidden",
          width: "100%",
          height: "100%",
          transform: "rotate(-60deg)",
        }}
      >
        <div
          css={{
            width: "100%",
            height: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: images[getRandomInt(0, images.length)],
            visibility: "visible",
            transform: "rotate(-60deg)",
            backgroundOrigin: "border-box",
            backgroundColor: idx % 2 ? "red" : "blue",
            backgroundImage: "url(/beeCreative.jpg)",
          }}
        ></div>
      </div>
    </div>
  );
};

Hexagon.propTypes = {
  backgroundImage: PropTypes.string,
};

export default Hexagon;
