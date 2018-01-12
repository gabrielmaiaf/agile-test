import React, { Component } from 'react';
import axios from 'axios';

const seasons = "https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json";

class DummyEpS1 extends Component {
	constructor() {
		super();
		this.state = {
			open: false
		};
		this.toggleContent = this.toggleContent.bind(this);
	}

	toggleContent() {
		this.setState({
			open: !(this.state.open)
		});
	}

	getContent() {
		if(this.state.open) {
			return "block"
		} else {
			return "none"
		}
	}

    render() {
    	let style = { display: this.getContent(), clear: "both" };    	
        return (
        	<div className="season1">
        		<div onClick={this.toggleContent}>	        	
        			<div className="epi-title">
        				<div className="epi-text">
        					<span className="epi-numtitle">{this.props.numEp} Sessão Espírita
        						<i className="fa fa-play-circle-o playbutton"></i>
	        				</span>
    	    				<div style={style} className="epi-description">
        	    				<img className="image-ep" src="https://occ-0-894-1123.1.nflxso.net/art/7b23c/f2a507d45fe0faa3716b7744dbefdb815c77b23c.webp" alt="Sessão Espírita" />
            					<p className="synopsis">Vanessa e Sir Malcolm vão a uma festa na casa do egiptólogo Sir Ferdinand Lyle e encontram o belo e enigmático Dorian Gray.</p>
	            			</div>
    	        		</div>
        	    	</div>
	            </div>
            </div>
        );
    }
}

class DummyEpS2 extends Component {
	constructor() {
		super();
		this.state = {
			open: false
		};
		this.toggleContent = this.toggleContent.bind(this);
	}

	toggleContent() {
		this.setState({
			open: !(this.state.open)
		});
	}

	getContent() {
		if(this.state.open) {
			return "block"
		} else {
			return "none"
		}
	}

    render() {
    	let style = { display: this.getContent(), clear: "both" };
        return (
        	<div className="season2">
        		<div onClick={this.toggleContent}>	        	
        			<div className="epi-title">
        				<div className="epi-text">
        					<span className="epi-numtitle">{this.props.numEp} Espíritos malignos em lugares celestiais
        						<i className="fa fa-play-circle-o playbutton"></i>
	        				</span>
    	    				<div style={style} className="epi-description">
        	    				<img className="image-ep" src="https://occ-0-894-1123.1.nflxso.net/art/48f7a/08089fc092e43c6756983bffdf048b12c8c48f7a.webp" alt="Espíritos malignos em lugares celestiais" />
            					<p className="synopsis">Lyle revela que as relíquias contam uma história perturbadora. O inspetor Rusk conversa com o sobrevivente do ataque.</p>
	            			</div>
    	        		</div>
        	    	</div>
	            </div>
            </div>
        );
    }
}

class DummyEpS3 extends Component {
	constructor() {
		super();
		this.state = {
			epi: [],
			open: false
		};
		this.toggleContent = this.toggleContent.bind(this);
	}

	componentDidMount() {
		axios.get(seasons)
		.then(({ data }) => {
			this.setState({
				epi: data[0]
			});
		}).catch(err => {
			console.log("Something is not right", err);
		});
	}

	toggleContent() {
		this.setState({
			open: !(this.state.open)
		});
	}

	getContent() {
		if(this.state.open) {
			return "block"
		} else {
			return "none"
		}
	}

    render() {
    	let style = { display: this.getContent(), clear: "both" };
        return (
        	<div className="season3">
        		<div onClick={this.toggleContent}>	        	
        			<div className="epi-title">
        				<div className="epi-text">
        					<span className="epi-numtitle">{this.props.numEp} Submundo
        						<i className="fa fa-play-circle-o playbutton"></i>
	        				</span>
    	    				<div style={style} className="epi-description">
        	    				<img className="image-ep" src="https://occ-0-894-1123.1.nflxso.net/art/bd269/1e6473de6bc46cc6c1e2314a10fd4439d9abd269.webp" alt="Submundo" />
            					<p className="synopsis">Vanessa fica cada vez mais fascinada com Dorian Gray. Van Helsing e Frankenstein tentam encontrar uma cura para a doença da filha de Sir Malcolm.</p>
	            			</div>
    	        		</div>
        	    	</div>
	            </div>
            </div>
        );
    }
}

export {
	DummyEpS1,
	DummyEpS2,
	DummyEpS3,
};
