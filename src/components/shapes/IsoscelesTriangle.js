import React from 'react'
import PropTypes from 'prop-types'
import theme from '../../theme'

const IsoscelesTriangle = (props) => {
	const { image, idx, fabric, quiltSectionWidth, changeOneFabric, fabricSelected } = props

	// if even number wide, true.
	// if not even number wide, make even every other row.
	const isEven = quiltSectionWidth % 2 === 1 || Math.floor(idx / quiltSectionWidth) % 2 === 0

	return (
		<div
			css={[
				{
					overflow: 'hidden',
					position: 'relative',
					clipPath: 'polygon(0% 0%, 100% 0%, 50% 100% )',
					width: `calc(${theme.breakpoints[0]} * 2 / ${quiltSectionWidth} - 1px)`,
					backgroundRepeat: 'repeat',
					backgroundImage: `url(./images/${fabric}/${fabric}${image}.jpg)`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					marginLeft: `calc((-${theme.breakpoints[0]} * 2 / ${quiltSectionWidth} - 1px) / 2)`,
					marginRight: `calc((-${theme.breakpoints[0]} * 2 / ${quiltSectionWidth} - 1px) / 2)`,
					transform: 'rotate(0deg)',
				},
				isEven
					? {
							'&:nth-of-type(even)': {
								transform: 'rotate(180deg)',
							},
					  }
					: {
							'&:nth-of-type(odd)': {
								transform: 'rotate(180deg)',
							},
					  },
			]}
		>
			{fabricSelected && (
				<div
					css={{
						width: '100%',
						height: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<button onClick={() => changeOneFabric(idx)}>{image}</button>
				</div>
			)}
		</div>
	)
}

IsoscelesTriangle.propTypes = {
	image: PropTypes.number,
	idx: PropTypes.number,
	fabric: PropTypes.string,
	quiltSectionWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	quiltSectionHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	changeOneFabric: PropTypes.func,
	fabricSelected: PropTypes.number,
}

const IsoscelesTriangles = (props) => {
	const { quiltSectionHeight, quiltSectionWidth, imageList } = props
	let heightMeasurement = `${theme.breakpoints[0]} * 2 / ${quiltSectionWidth}`
	const widthMeasurement = `(188vw / ${quiltSectionWidth} - 1px) / 2`

	return (
		<div
			className="Quilt"
			css={{
				overflow: 'hidden',
				width: `calc(${theme.breakpoints[0]} - ${widthMeasurement})`,
				display: 'grid',
				gridTemplateColumns: `repeat(${parseInt(quiltSectionWidth + 1)}, calc( ${
					theme.breakpoints[0]
				} / ${quiltSectionWidth}))`,
				gridTemplateRows: `repeat(${quiltSectionHeight}, calc(${heightMeasurement}))`,
				margin: `40px auto -16px auto`,
				maxHeight: `calc(${heightMeasurement} - 1})`,
				boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
			}}
		>
			{imageList.map((image, idx) => {
				return <IsoscelesTriangle key={`hexi-key-${image}-${idx}`} idx={idx} image={image} {...props} />
			})}
		</div>
	)
}

IsoscelesTriangles.propTypes = {
	imageList: PropTypes.array,
	quiltSectionWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	quiltSectionHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	fabric: PropTypes.string,
	changeOneFabric: PropTypes.func,
	fabricSelected: PropTypes.number,
}

export default IsoscelesTriangles
