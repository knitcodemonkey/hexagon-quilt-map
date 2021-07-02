import React, { useState, useEffect } from 'react'
import './homepage.css'

import QuiltSection from '../components/QuiltSection'
import FabricKey from '../components/FabricKey'
import FormField from '../components/FormField'
import {
	regenerateAllImages,
	generateAllImages,
	generateWithoutChanged,
	getImageCounts,
	setImageList,
	setFabricLS,
} from '../utils/generateImages'
import specs from '../utils/specs'

const Subtitle = ({ title, description }) => (
	<p
		css={{
			margin: 10,
			padding: 0,
			fontSize: '1.2rem',
		}}
	>
		<span css={{ fontWeight: 'bold' }}>{title}</span> {description}
	</p>
)

function Homepage() {
	const lStorage = { ...localStorage }

	const initialValues = {
		width: parseInt(lStorage?.quiltSectionWidth ?? 17),
		height: parseInt(lStorage?.quiltSectionHeight ?? 7),
		fabric: lStorage?.fabric ?? 'beeCreative',
		shape: lStorage?.shape ?? 'Hexagon',
	}

	useEffect(() => {
		setFabricLS(initialValues.fabric)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	// Find out number of instancesl
	const [counts, setImageCounts] = useState(getImageCounts())
	const [quiltSectionWidth, setQuiltSectionWidth] = useState(initialValues.width)
	const [quiltSectionHeight, setQuiltSectionHeight] = useState(initialValues.height)
	const [fabric, setFabric] = useState(initialValues.fabric)
	const [shape, setShape] = useState(initialValues.shape)
	const [fabricSelected, selectFabric] = useState()
	const [imageList, updateImageList] = useState([])
	const [changedFabrics, updateChangedFabrics] = useState([])

	const changeOneFabric = (imageIndex) => {
		let newImageList = Object.assign(imageList)

		newImageList[imageIndex] = fabricSelected
		setImageList(newImageList)
		setImageCounts(getImageCounts(newImageList))

		const generatedImageList = generateAllImages({
			quiltSectionWidth,
			quiltSectionHeight,
			fabric,
			shape,
		})

		updateImageList(generatedImageList)

		if (!changedFabrics.includes(imageIndex, 0)) updateChangedFabrics(changedFabrics.concat(imageIndex))
	}

	const randomizeAllNew = () => {
		const newImageList = regenerateAllImages({
			quiltSectionWidth,
			quiltSectionHeight,
			fabric,
			shape,
		})

		updateImageList(newImageList)
		updateChangedFabrics([])

		setImageCounts(getImageCounts())
	}

	const randomizeExceptSelected = () => {
		let makingImageList = Object.assign(imageList)

		setImageList(makingImageList)
		setImageCounts(getImageCounts())

		const newImageList = generateWithoutChanged({
			quiltSectionWidth,
			quiltSectionHeight,
			fabric,
			changedFabrics,
		})

		updateImageList(newImageList)
	}

	useEffect(() => {
		const newImageList = generateAllImages({
			quiltSectionWidth,
			quiltSectionHeight,
			fabric,
			shape,
		})

		updateImageList(newImageList)
		setImageCounts(getImageCounts())
	}, [quiltSectionWidth, quiltSectionHeight, fabric, shape])

	return (
		<main className="Homepage">
			<header>
				<h1 css={{ margin: 0, paddingTop: 20 }}>Quilt Fabric Randomizer</h1>
				<Subtitle description="by Jen Luker" />
			</header>

			<div
				css={{
					boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
					borderTop: '1px solid rgba(0, 0, 0, 0.3)',
					borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
					width: '100%',
					marginTop: 20,
					padding: '20px auto 10px auto',
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'flex-end',
					flexWrap: 'wrap',
					backgroundColor: '#fff',
				}}
			>
				<div css={{ minWidth: 360 }}>
					<div
						css={{
							width: '100%',
							display: 'flex',
							justifyContent: 'space-between',
							flexWrap: 'wrap',
							margin: `0 auto`,
						}}
					>
						<Subtitle description={<a href="https://knitcodemonkey.github.io/hexagon-quilt-map/">Go to Website</a>} />
						<Subtitle description={<a href="https://github.com/knitcodemonkey/hexagon-quilt-map">See on Github</a>} />
					</div>
					<div
						css={{
							width: '100%',
							display: 'flex',
							justifyContent: 'space-between',
							flexWrap: 'wrap',
							margin: `10px auto`,
						}}
					>
						<button css={{ flexWrap: 'wrap' }} type="button" onClick={() => randomizeAllNew()}>
							Randomize
						</button>
						<button
							css={{ flexWrap: 'wrap' }}
							type="button"
							onClick={() => {
								if (changedFabrics.length > 0) randomizeExceptSelected()
								else randomizeAllNew()
							}}
						>
							Randomize Not Changed
						</button>
					</div>
				</div>

				<form
					css={{
						display: 'flex',
						justifyContent: 'space-around',
						flexWrap: 'wrap',
					}}
				>
					<div>
						<FormField label="Shape:">
							<select
								value={shape}
								onChange={(event) => {
									setShape(event.target.value)
									localStorage.setItem('shape', event.target.value)
									updateChangedFabrics([])
								}}
							>
								<option value={'Hexagon'}>Hexagon</option>
								<option value={'Square'}>Square</option>
								<option value={'IsoscelesTriangle'}>Isosceles Triangle</option>
								<option value={'RightTriangle'}>Half Square Triangle</option>
							</select>
						</FormField>

						<FormField label="Fabric:">
							<select
								value={fabric}
								onChange={(event) => {
									setFabric(event.target.value)
									localStorage.setItem('fabric', event.target.value)
									updateChangedFabrics([])
								}}
							>
								{Object.keys(specs).map((key) => {
									return (
										<option key={key} value={key}>
											{specs[key].name}
										</option>
									)
								})}
							</select>
						</FormField>
					</div>
					<div>
						<FormField label="Generated Width:">
							<select
								value={quiltSectionWidth}
								onChange={(event) => {
									setQuiltSectionWidth(parseInt(event.target.value))
									localStorage.setItem('quiltSectionWidth', parseInt(event.target.value))
									updateChangedFabrics([])
								}}
							>
								{[...Array(30).keys()].map((num) => {
									return (
										<option key={`wide-${num}`} value={num}>
											{num}
										</option>
									)
								})}
							</select>
						</FormField>

						<FormField label="Generated Height:">
							<select
								value={quiltSectionHeight}
								onChange={(event) => {
									setQuiltSectionHeight(parseInt(event.target.value))
									localStorage.setItem('quiltSectionHeight', parseInt(event.target.value))
									updateChangedFabrics([])
								}}
							>
								{[...Array(100).keys()].map((num) => {
									return (
										<option key={`tall-${num}`} value={num}>
											{num}
										</option>
									)
								})}
							</select>
						</FormField>
					</div>
				</form>
			</div>

			<article
				css={{
					paddingTop: 1,
					paddingBottom: 56,
					margin: '0 auto',
					backgroundImage: `url(./wood.jpg)`,
					backgroundOpacity: 0.5,
				}}
			>
				<QuiltSection
					key={`QuiltSection-${imageList.length}-${fabricSelected}`}
					quiltSectionWidth={quiltSectionWidth}
					quiltSectionHeight={quiltSectionHeight}
					fabric={fabric}
					shape={shape}
					imageList={imageList}
					changeOneFabric={changeOneFabric}
					fabricSelected={fabricSelected}
				/>
			</article>

			<footer
				css={{
					borderTop: '1px solid rgba(0, 0, 0, 0.3)',
					boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
				}}
			>
				<FabricKey
					counts={counts}
					fabric={fabric}
					selectFabric={selectFabric}
					fabricSelected={fabricSelected}
					key={counts}
				/>
			</footer>
		</main>
	)
}

export default Homepage
