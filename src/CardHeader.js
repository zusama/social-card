import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './CardHeader.css';

class CardHeader extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Image src='./download.jpeg' circle />	
		);
	}
} 

export default CardHeader;