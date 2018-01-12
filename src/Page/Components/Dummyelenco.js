import React, { Component } from 'react';

class DummyElenco extends Component {
	render() {
		return(
			<div className="info-nameactor" id={this.props.id}>
				<span className="inf-actor">Atriz ou Ator</span>
				<span className="inf-carac">Personagem</span>
			</div>
		);
	}
};

export default DummyElenco;