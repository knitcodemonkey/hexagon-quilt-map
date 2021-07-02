import getRandomInt from './getRandomInt'
import specs from './specs'
import isEmpty from './is-empty'

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
	const { hueWidth, notImage, fabricCount } = specs[fabric]

	let imageList = getImageList()
	let availableFabricCounts = generateFabricCounts(imageList)

	// get 3 hexis touching top of current hexi
	let touchingSpaces = [imageList[idx - 1], imageList[idx - 2]]

	if (shape && shape.indexOf('Triangle') > -1) {
		touchingSpaces = [
			...touchingSpaces,
			imageList[idx - rowWidth * 2 - 1],
			imageList[idx - rowWidth * 2],
			imageList[idx - rowWidth * 2 + 1],
		]
	} else {
		touchingSpaces = [
			...touchingSpaces,
			imageList[idx - rowWidth - 1],
			imageList[idx - rowWidth],
			imageList[idx - rowWidth + 1],
		]
	}

	// Assuming 5 hues (the minimum allowed), making sure that all 5 previous spaces
	// aren't the same as the current one is impossible and results in an unending loop
	const hueList = touchingSpaces.slice(0, -1) // slicing in place can break things if not done carefully.
	const touchingSpacesHue = hueList.map((val) => val % hueWidth)

	// Set default random values
	let randImgNum = 1
	let randImageHue = randImgNum % hueWidth
	let noFabricAvailable = true
	let missingImage = false
	let keepRerolling = false

	let sorryGottaTouch = 0

	do {
		// Get random values
		randImgNum = getRandomInt(1, fabricCount + 1)
		randImageHue = randImgNum % hueWidth

		// set params for easier "while" use
		const sameAsLastRow = touchingSpaces.indexOf(randImgNum) > -1
		const sameAsLastRowHue = touchingSpacesHue.indexOf(randImageHue) > -1

		// Make sure that availableFabricCounts isn't empty for this random number
		if (isEmpty(availableFabricCounts?.[randImgNum])) {
			availableFabricCounts[randImgNum] = 100
		}

		noFabricAvailable = availableFabricCounts[randImgNum] <= 1
		missingImage = notImage.indexOf(randImgNum) > -1

		const reroll = missingImage || sameAsLastRow || sameAsLastRowHue || noFabricAvailable
		const tooManyRerolls = sorryGottaTouch > 20 && !noFabricAvailable && !missingImage
		keepRerolling = reroll && !tooManyRerolls

		if (keepRerolling) {
			sorryGottaTouch++
		} else {
			sorryGottaTouch = 0
		}

		//console.log({ randImgNum, keepRerolling, sorryGottaTouch, available: !noFabricAvailable && !missingImage })
	} while (keepRerolling)

	return randImgNum
}

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
const generateAllImages = ({ fabric, quiltSectionWidth, quiltSectionHeight, shape }) => {
	const imageList = getImageList()
	const newImageList = []
	const height = shape === 'RightTriangle' ? (quiltSectionHeight - 1) * 2 : quiltSectionHeight

	const allImages = [...Array(quiltSectionWidth * height).keys()]
	allImages.forEach((idx) => {
		const data = { idx, rowWidth: quiltSectionWidth, fabric }
		const image = imageList[idx] || generateRandomImage(data)
		newImageList.push(image)
		setImageList(newImageList)
		setFabricCounts(generateFabricCounts(newImageList))
	})

	return newImageList
}

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
const generateWithoutChanged = ({ fabric, quiltSectionWidth, quiltSectionHeight, changedFabrics }) => {
	const imageList = getImageList()
	const newImageList = []

	;[...Array(quiltSectionWidth * quiltSectionHeight).keys()].forEach((idx) => {
		const data = { idx, rowWidth: quiltSectionWidth, fabric }
		const image = generateRandomImage(data)
		newImageList.push(image)
		setImageList(newImageList)
		setFabricCounts(generateFabricCounts(newImageList))
	})

	changedFabrics.forEach((idx) => {
		newImageList[idx] = imageList[idx]
	})

	return newImageList
}

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
const regenerateAllImages = (data) => {
	removeImageList()
	removeFabricCounts()
	return generateAllImages(data)
}

/**
 * Returns the imageList from either localStorage, or an empty array
 *
 * @returns {array}
 */
const getImageList = () => {
	const images = JSON.parse(window.localStorage.getItem('imageList'))
	return images || []
}

/**
 * Sets an array of images to localStorage
 * @param {array} images
 */
const setImageList = (images) => {
	window.localStorage.setItem('imageList', JSON.stringify(images || []))
}

export const setFabricLS = (fabric) => {
	window.localStorage.setItem('fabric', fabric)
}

/**
 * Removes imageList from localStorage
 *
 * @param {array} images
 */
const removeImageList = () => {
	window.localStorage.removeItem('imageList')
}

/**
 * Removes an array of fabric counts used
 *
 * @param {array} images
 */
const removeFabricCounts = () => {
	window.localStorage.removeItem('availableFabricCounts')
}

/**
 * @returns {object} object of counts for key
 */

const getImageCounts = (newImageList) => {
	const imageList = Object.assign(isEmpty(newImageList) ? getImageList() : newImageList)
	let counts = {}

	imageList.forEach((val) => {
		counts[val] = isEmpty(counts?.[val]) ? 1 : counts[val] + 1
	})

	return counts
}

/**
 * Sets an array of fabric counts used
 *
 * @param {array} images
 */
// export const getFabricCounts = () => {
// 	const availableFabricCounts = specs[getFabric()]?.availableCounts ?? {}
// 	const newAvailableFabricCounts = Object.assign(availableFabricCounts)

// 	const localStorageFabricCounts = JSON.parse(window.localStorage.getItem('availableFabricCounts')) ?? []
// 	Object.entries(localStorageFabricCounts).forEach(([key, val]) => {
// 		newAvailableFabricCounts[key] = !isEmpty(val) ? val : availableFabricCounts?.[key] ?? 100
// 	})

// 	return newAvailableFabricCounts
// }

/**
 * accepts an optional imageList to generate new fabric counts
 *
 * @param {array} imageList
 * @returns
 */

export const generateFabricCounts = (imageList) => {
	const newImageList = !isEmpty(imageList) ? imageList : getImageList()
	const fabricCounts = specs[getFabric()]?.availableCounts ?? {}
	const imageCounts = getImageCounts(newImageList)
	const newfabricCounts = {}
	Object.entries(fabricCounts).forEach(([key, val]) => {
		newfabricCounts[key] = val - (imageCounts?.[key] ?? 0)
	})

	return newfabricCounts
}

const setFabricCounts = (fabricCounts) => {
	window.localStorage.setItem('availableFabricCounts', JSON.stringify(fabricCounts))
}

export const getFabric = () => window.localStorage.getItem('fabric')

export {
	generateRandomImage,
	generateAllImages,
	generateWithoutChanged,
	getImageList,
	setImageList,
	regenerateAllImages,
	getImageCounts,
}
