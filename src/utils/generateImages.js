import getRandomInt from "./getRandomInt";
import specs from "./specs";

/**
 * Generates a single random image for generateAllImages()
 *
 * @param {int} idx
 * @param {int} rowWidth
 * @param {int} hueWidth
 * @param {array} notColors
 *
 * @returns {int}
 */
const generateRandomImage = ({ idx, rowWidth, fabric, shape }) => {
  const { hueWidth, notImage, fabricCount } = specs[fabric];
  let imageList = getImageList();

  // get 3 hexis touching top of current hexi
  let touchingSpaces = [imageList[idx - 1], imageList[idx - 2]];

  if (shape && shape.indexOf("Triangle") > -1) {
    touchingSpaces = [
      ...touchingSpaces,
      imageList[idx - rowWidth * 2 - 1],
      imageList[idx - rowWidth * 2],
      imageList[idx - rowWidth * 2 + 1]
    ];
  } else {
    touchingSpaces = [
      ...touchingSpaces,
      imageList[idx - rowWidth - 1],
      imageList[idx - rowWidth],
      imageList[idx - rowWidth + 1]
    ];
  }

  // Assuming 5 hues (the minimum allowed), making sure that all 5 previous spaces
  // aren't the same as the current one is impossible and results in an unending loop
  const hueList = touchingSpaces.slice(0, -1); // slicing in place can break things if not done carefully.
  const touchingSpacesHue = hueList.map(val => val % hueWidth);

  // Set default random values
  let randImgNum = 1;
  let randImageHue = randImgNum % hueWidth;
  let sameAsLastRow = true;
  let sameAsLastRowHue = true;

  do {
    // Get random values
    randImgNum = getRandomInt(1, fabricCount + 1);
    randImageHue = randImgNum % hueWidth;

    // set params for easier "while" use
    sameAsLastRow = touchingSpaces.indexOf(randImgNum) > -1;
    sameAsLastRowHue = touchingSpacesHue.indexOf(randImageHue) > -1;

    console.log(notImage, randImgNum);
  } while (
    notImage.indexOf(randImgNum) > -1 ||
    sameAsLastRow ||
    sameAsLastRowHue
  );
  return randImgNum;
};

/**
 * Generates all the images for the quilt at once based on either localStorage, or pulling random images from generateRandomImage()
 *
 * @param {int} hueWidth
 * @param {int} quiltSectionWidth
 * @param {int} quiltSectionHeight
 * @param {array} notColors
 *
 * @returns {array}
 */
const generateAllImages = ({
  fabric,
  quiltSectionWidth,
  quiltSectionHeight,
  shape
}) => {
  const imageList = getImageList();
  const newImageList = [];
  const height =
    shape === "RightTriangle"
      ? (quiltSectionHeight - 1) * 2
      : quiltSectionHeight;

  [...Array(quiltSectionWidth * height).keys()].forEach(idx => {
    const data = { idx, rowWidth: quiltSectionWidth, fabric };
    const image = imageList[idx] || generateRandomImage(data);
    newImageList.push(image);
    setImageList(newImageList);
  });

  return newImageList;
};

/**
 * Generates all the images for the quilt pulling random images from generateRandomImage().
 * Then changes items of the generated quit array which indexes are inside of the changedFabrics arrat back to the previous version.
 *
 * @param {object} fabric
 * @param {int} quiltSectionWidth
 * @param {int} quiltSectionHeight
 * @param {array} changedFabrics
 *
 * @returns {array}
 */
const generateWithoutChanged = ({
  fabric,
  quiltSectionWidth,
  quiltSectionHeight,
  changedFabrics
}) => {
  const imageList = getImageList();
  const newImageList = [];

  [...Array(quiltSectionWidth * quiltSectionHeight).keys()].forEach(idx => {
    const data = { idx, rowWidth: quiltSectionWidth, fabric };
    const image = generateRandomImage(data);
    newImageList.push(image);
    setImageList(newImageList);
  });

  changedFabrics.forEach(idx => {
    newImageList[idx] = imageList[idx];
  });

  return newImageList;
};

/**
 * Empties localStorage, and runs generateAllImages()
 *
 * @param {int} hueWidth
 * @param {int} quiltSectionWidth
 * @param {int} quiltSectionHeight
 * @param {array} notColors
 *
 * @returns {array}
 */
const regenerateAllImages = data => {
  removeImageList();
  return generateAllImages(data);
};

/**
 * Returns the imageList from either localStorage, or an empty array
 *
 * @returns {array}
 */
const getImageList = () => {
  const images = JSON.parse(window.localStorage.getItem("imageList"));
  return images || [];
};

/**
 * Sets an array of images to localStorage
 *
 * @param {array} images
 */
const setImageList = images => {
  window.localStorage.setItem("imageList", JSON.stringify(images || []));
};

/**
 * Removes imageList from localStorage
 *
 * @param {array} images
 */
const removeImageList = () => {
  window.localStorage.removeItem("imageList");
};

/**
 * @returns {object} object of counts for key
 */

const getImageCounts = () => {
  const imageList = getImageList();
  let counts = {};

  imageList.forEach(val => {
    counts[val] = counts[val] + 1 || 1;
  });

  return counts;
};

export {
  generateRandomImage,
  generateAllImages,
  generateWithoutChanged,
  getImageList,
  setImageList,
  regenerateAllImages,
  getImageCounts
};
