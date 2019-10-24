import getRandomInt from "./util";

const width = 112;
const height = 112;

const imageSprite = () => {
  const widthPosition = getRandomInt(1, 5) * width + 2;
  const heightPosition = getRandomInt(1, 4) * height + 2;
  return {
    backgroundImage: `url("/beeCreative.jpg"),
    backgroundPositionX: ${widthPosition}px,
    backgroundPositionY: ${heightPosition}px`,
  };
};

export default imageSprite;
