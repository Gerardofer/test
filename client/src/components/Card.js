import React, { Component } from 'react';
import "./Card.css";

class Card extends Component {
	render() {
		return (
			<div className="container">
			<div className="overlay"></div>
				<div className="row">
					<div className="col s4">
						<div className="card hoverable center-align">
							<div className="card-image">
							<img src="https://www.gannett-cdn.com/-mm-/959b8a0d077ef37a2f32651fca1907698404cf74/c=0-62-580-388/local/-/media/2018/07/02/USATODAY/usatsports/MotleyFool-TMOT-87cfe4f6-charity_large.jpg?width=3200&height=1680&fit=crop" alt="image"/>
								<div className="card-title">
									Card Title
								</div>
								<div className="card-content">
								<p>Description</p>
								<p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
								<p> Target: x out of x dollars</p>
								<span>Donate: <input type='text'></input></span>
								</div>
							</div>
						</div>
					</div>

					<div className="col s4">
						<div className="card hoverable">
							<div className="card-image">
								<img src="https://www.gannett-cdn.com/-mm-/959b8a0d077ef37a2f32651fca1907698404cf74/c=0-62-580-388/local/-/media/2018/07/02/USATODAY/usatsports/MotleyFool-TMOT-87cfe4f6-charity_large.jpg?width=3200&height=1680&fit=crop" alt="image"/>
								{/* <a className="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a> */}
							</div>
							<div className="card-title center-align">
								Card Title
							</div>
							{/* <div className="card-content">
								<p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
							</div> */}
						</div>
					</div>

					<div className="col s4">
						<div className="card hoverable">
							<div className="card-image">
								<img src="https://www.gannett-cdn.com/-mm-/959b8a0d077ef37a2f32651fca1907698404cf74/c=0-62-580-388/local/-/media/2018/07/02/USATODAY/usatsports/MotleyFool-TMOT-87cfe4f6-charity_large.jpg?width=3200&height=1680&fit=crop" alt="image"/>
								{/* <a className="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a> */}
							</div>
							<div className="card-title center-align">Card Title</div>
							{/* <div className="card-content">
								<p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;