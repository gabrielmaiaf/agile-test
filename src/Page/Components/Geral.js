import React, { Component } from 'react';

export default class Geral extends Component {
	render() {
		return(
			<div>
				<div id="info-icons">
					<div className="icons-items">
						<span></span>
						<i className="fa fa-plus-circle fa-inverse" ></i>
						<span className="icons-label">Minha Lista</span>
					</div>
					<div className="icons-items">
						<i className="fa fa-frown-o"></i>
						<span className="icons-label">Avaliar</span>
					</div>
					<div className="icons-items">
						<i className="fa fa-dot-circle-o"></i>
						<span className="icons-label">Baixar</span>
					</div>
					<div className="icons-items">
						<i className="fa fa-share-alt"></i>
						<span className="icons-label">Compartilhar</span>
					</div>
				</div>
				<div id="info-sinopse">
					<span className="sinopse-title">SINOPSE</span><br />
					<span className="sinopse-texto">{this.props.synopsis}</span>
				</div>
			</div>
		);
	}
}