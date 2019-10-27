import React from "react";
import PropTypes from "prop-types";

const Hexagon = ({ image, idx }) => {
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
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "100%",
          transform: "rotate(-60deg)",
          backgroundColor: 'transparent',
        }}
      >
        <div
          css={{
            width: "100%",
            height: "100%",
            backgroundRepeat: "repeat",
            backgroundImage: `url(./images/beeCreative${image}.jpg)`,
            backgroundPosition: "center",
            visibility: "visible",
            transform: "rotate(-60deg)",
            backgroundOrigin: "border-box",
            backgroundColor: "transparent",

          }}
        >
          <div
            css={{
              display: "flex",
              justifyContent: 'center',
              alignItems: 'flex-end',
              zIndex: 10,
              color: "blue",
              fontSize: 24,
              fontWeight: 'bold',
              textAlign: 'center',
              backgroundColor: '#fff'
            }}
          >
            {`${image}-${image % 5}`}
          </div>
        </div>
      </div>
    </div>
  );
};

Hexagon.propTypes = {
  image: PropTypes.number,
  idx: PropTypes.number,
};

export default Hexagon;
