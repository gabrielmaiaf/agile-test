import React, { Component } from 'react';

class Elenco extends Component {
	render() {
		return(
			<div className="info-nameactor" id={this.props.id}>
				<span className="inf-actor">{this.props.name}</span>
				<span className="inf-carac">Personagem</span>
			</div>
		);
	}
};

export default Elenco;