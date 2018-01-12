import React, { Component } from 'react';
import axios from 'axios';
import Episode from "./Components/Episode";
import { DummyEpS1, DummyEpS2, DummyEpS3 } from "./Components/Dummyep";
import _ from 'lodash';

const seasons = "https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json";

export default class Seasons extends Component {
	constructor() {
		super();
		this.state = {
			eps: [],
			disp1: "block",
			disp2: "none",
			disp3: "none",
			act1: "active",
			act2: "desactive",
			act3: "desactive"
		};		
		this.toggleOne = this.toggleOne.bind(this);
	}

	toggleOne = (id) => {
		if (id === 3) {
			this.setState({
				disp1: "none",
				disp2: "none",
				disp3: "block",
				act1: "desactive",
				act2: "desactive",
				act3: "active"
			});
		} else if (id === 2){
			this.setState({
				disp1: "none",
				disp2: "block",
				disp3: "none",
				act1: "desactive",
				act2: "active",
				act3: "desactive"
			})
		} else {
			this.setState({
				disp1: "block",
				disp2: "none",
				disp3: "none",
				act1: "active",
				act2: "desactive",
				act3: "desactive"
			})
		};
	}

	componentDidMount() {
		axios.get(seasons)
		.then(({ data }) => {
			console.log(data);
			this.setState({
				eps: data
			});
		}).catch(err => {
        console.log("Something lead to an error", err);
      	});
	}

	render() {
		let style1 = { display: this.state.disp1 },
			style2 = { display: this.state.disp2 },
			style3 = { display: this.state.disp3 },
			season = _.range(5,13),
			fullseason = _.range(1,13),
			classe1 = this.state.act1,
			classe2 = this.state.act2,
			classe3 = this.state.act3;
		return(
			<div id="seasons">
				<div className="titles">
					<span className={"temporadas " + classe1} onClick={e => this.toggleOne(1)}>T1</span>
					<span className={"temporadas " + classe2} onClick={e => this.toggleOne(2)}>T2</span>
					<span className={"temporadas " + classe3} onClick={e => this.toggleOne(3)}>T3</span>
				</div>
				<div className="temporada1" style={style1}>
					{this.state.eps && this.state.eps.slice(0, 2).map((item) => 
							<div className={"season" + item.SeasonNumber} key={item.ID}>
								<Episode
									id={item.ID}
									src={item.Image}
									synopsis={item.Synopsis}
									title={item.Title}
									numEp={item.EpisodeNumber}
								/>
							</div>
						)}
					{this.state.eps && this.state.eps.slice(3, 5).map(item => 
							<div className={"episodes season" + item.SeasonNumber} key={item.ID}>
								<Episode
									id={item.ID}
									src={item.Image}
									synopsis={item.Synopsis}
									title={item.Title}
									numEp={item.EpisodeNumber}
								/>
							</div>
						)}
					{season.map(item =>
						<DummyEpS1 key={item} numEp={item} />
					)}
				</div>
				<div className="temporada2" style={style2}>
					{this.state.eps && this.state.eps.slice(5).map((item) => 
							<div className={"episodes season" + item.SeasonNumber} key={item.ID}>
								<Episode
									id={item.ID}
									src={item.Image}
									synopsis={item.Synopsis}
									title={item.Title}
									numEp={item.EpisodeNumber}
								/>
							</div>
					)}
					{season.map(item =>
						<DummyEpS2 key={item} numEp={item} />
					)}
				</div>
				<div className="temporada3" style={style3}>
					{fullseason.map(item =>
						<DummyEpS3 key={item} numEp={item} />
					)}
				</div>
			</div>
		)
	};
};