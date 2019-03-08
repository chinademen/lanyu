import React, { Component } from 'react'
import SvgUri from './react-native-svg-uri'
import svgs from '@/assets/dh/svgs'

export default class Svg extends Component {
	constructor(props) {
		super(props);
		this.state = {
			icon: props.icon
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.icon != this.props.icon) {
			this.setState({
				icon: nextProps.icon
			})
		}
	}

	render() {
		const { color, size, style } = this.props;
		const { icon } = this.state;
		let svgXmlData = svgs[icon];

		if (!svgXmlData) {
			let err_msg = `没有"${icon}"这个icon`;
			throw new Error(err_msg);
		}
	
		return (
			<SvgUri
				width={size}
				height={size}
				svgXmlData={svgXmlData}
				fill={color}
				style={style}
			/>
		)
	}
}