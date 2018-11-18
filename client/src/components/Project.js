import React, { Component } from 'react';
import Card from './Card';

class Project extends Component {
	state = {
		active: false
	}

	setActive = () => {
		let currentState = this.state.active;
		currentState = !currentState;
		this.setState(
			{active:currentState}
		)
	}

	render() {
		return (
			<div>
				{/* 1. Create layout for cards ~ 3-4 cards per row
				2. Create Card.js using materialize css https://materializecss.com/cards.html
					- Card.js will need charity name, description, image
						- implement stripe on these cards for payment
					- Add CSS to cards
						- Base card will only contain the charity image and name
						- Active toggle for card to expand out, with the description/payment options/fund status appearing 
							- Need to create a state for the card to keep it active 
							- https://stackoverflow.com/questions/42630473/react-toggle-class-onclick */}
				<Card setActive={this.setActive} active={this.state.active}/>
			</div>
		);
	}
}

export default Project;