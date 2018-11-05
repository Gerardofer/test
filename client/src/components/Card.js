import React, { Component } from 'react';

class Card extends Component {
	render() {
		return (
			<div>
				<div class="row">
					<div class="col s3">
						<div class="card">
							<div class="card-image">
								<img src="https://media.bizj.us/view/img/10305572/howtogivecharities*750xx3865-2178-0-397.jpg" />
								{/* <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a> */}
							</div>
							<span class="card-title">Card Title</span>
							{/* <div class="card-content">
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