import React, { Component } from 'react';

class Episode extends Component {
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
        	<div className={this.props.id} onClick={this.toggleContent}>	        	
        		<div className="epi-title">
        			<div className="epi-text">
        				<span className="epi-numtitle">{this.props.numEp} {this.props.title}
        					<i className="fa fa-play-circle-o playbutton"></i>
        				</span>
        				<div style={style} className="epi-description">
            				<img className="image-ep" src={this.props.src} alt={this.props.title} />
            				<p className="synopsis">{this.props.synopsis}</p>
            			</div>
            		</div>
            	</div>
            </div>
        );
    }
}

export default Episode;
