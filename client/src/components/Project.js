import React, { Component } from 'react';
import Card from './Card';

class Project extends Component {
	state = {
		active: false,
		modal: false
	}

	handleClick = () => {
		console.log('button clicked')
		console.log(this.state.active)
		if(this.state.active === true){
			this.setState({
				active: false
			})
		}else {
			this.setState({
				active: true
			})
		}
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
							- https://stackoverflow.com/questions/42630473/react-toggle-class-onclick 
					- Each card should be rendered from database call
						- A key will need to be assigned to each card so that when the state is changed, not every card is getting affected
							- Only the card w/ its key should be changing in the state call		
					*/}

				<Card active={this.state.active} handleClick={this.handleClick}/>
			</div>
		);
	}
}

export default Project;