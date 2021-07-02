import React from 'react'
import PropTypes from 'prop-types'
import specs from '../utils/specs'
import { generateFabricCounts, getImageCounts } from '../utils/generateImages'

const FabricKey = ({ fabric, selectFabric, fabricSelected }) => {
	const { fabricCount, notImage, hueWidth } = specs[fabric]
	const gridTemplateColumns = `calc(94vw / ${hueWidth} - 10px)`

	const fabricCounts = generateFabricCounts()
	const counts = getImageCounts()

	return (
		<aside
			css={{
				margin: 0,
				padding: 20,
				width: 'calc(100% - 40px)',
				backgroundColor: '#fff',
			}}
		>
			<h2 css={{ margin: 0, marginBottom: 20, padding: 0 }}>Color Key</h2>

			{/** Hue Headers */}
			<div
				css={{
					display: 'flex',
					justifyContent: 'space-around',
					fontWeight: 'bold',
					fontSize: 24,
					margin: 0,
				}}
			>
				{[...Array(hueWidth).keys()].map((idx) => {
					const imageNumber = idx + 1
					return (
						<div
							key={`Hue-Header-${imageNumber % hueWidth}`}
							css={{ borderBottom: '1px solid grey', marginBottom: 10, paddingBottom: 10, width: '100%' }}
						>{`Hue: ${imageNumber % hueWidth || hueWidth}`}</div>
					)
				})}
			</div>

			{/** Images */}
			<div css={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
				{[...Array(Math.ceil(fabricCount / hueWidth) * hueWidth).keys()].map((idx) => {
					const imageNumber = idx + 1
					const missingImg = notImage.indexOf(imageNumber) !== -1 || imageNumber > fabricCount

					return (
						<div css={{ marginBottom: 10 }} key={`Image-${imageNumber}`}>
							{!missingImg && (
								<div
									css={{
										fontWeight: 'bold',
										fontSize: 16,
										textShadow: '0px 0px 2px white',
									}}
								>
									<span>{`#${imageNumber}: `}</span>
									<span css={{ color: fabricCounts[imageNumber] < 0 && 'red' }}>{`${counts[imageNumber] || 0} uses - ${
										fabricCounts?.[imageNumber]
									} left`}</span>
								</div>
							)}
							<div
								key={`orig-image-order-${imageNumber}`}
								id={`orig-image-order-${imageNumber}`}
								css={{
									width: gridTemplateColumns,
									height: 100,
									backgroundRepeat: 'repeat',
									backgroundImage: `url(./images/${fabric}/${fabric}${imageNumber}.jpg)`,
									backgroundPosition: 'center',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'flex-end',
									border: !missingImg && '1px solid grey',
								}}
							>
								{!missingImg && (
									<button
										css={{ width: 'calc(100% + 2px)', margin: -1, padding: 5, fontSize: '0.9rem' }}
										onClick={() => {
											fabricSelected === imageNumber ? selectFabric('') : selectFabric(imageNumber)
										}}
									>
										{fabricSelected === imageNumber ? 'No more!' : 'Choose me!'}
									</button>
								)}
							</div>
						</div>
					)
				})}
			</div>
		</aside>
	)
}

FabricKey.propTypes = {
	counts: PropTypes.object,
	hueWidth: PropTypes.number,
	fabric: PropTypes.string,
	fabricSelected: PropTypes.number,
	selectFabric: PropTypes.func,
}

export default FabricKey
