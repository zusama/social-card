import React, { Component } from 'react';
import './SocialCard.css';
import CardHeader from './CardHeader';

class SocialCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div> {/* Header */}
					<CardHeader />
				</div>
				<div> {/* Body */}
					This is the body
				</div>
				<div> {/* Footer */}
					This is the footer
				</div>
			</div>
		);
	}
}

export default SocialCard;