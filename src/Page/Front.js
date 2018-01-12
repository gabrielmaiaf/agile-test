import React, { Component } from 'react';
import axios from 'axios';
import Seasons from "./Seasons";

const tvshow = "https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json";

export default class Front extends Component {
  constructor() {
    super();
    this.state = {
      bgnd: [],
      data1: []
    }
  };

  componentDidMount() {
      axios.get(tvshow)
      .then(({ data }) => {
        this.setState({
          data1: data,
          bgnd: data.Images
          });
      }).catch(err => {
        console.log("Something lead to an error", err);
      });
  };

  render() {
    let back = {
      backgroundImage: "url(" + Object.values(this.state.bgnd) + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
    };

    return (
      <div key={ this.state.data1.ID } style={back}>
        <div id="front">
          <div className="title-container">
            <h1 className="title">{this.state.data1.Title}</h1>
            <h2 className="subtitle">80% indicado / {this.state.data1.Genres && this.state.data1.Genres.map(item =>
              <span key={item.ID}>{item.Title} </span>)} / {this.state.data1.Year} / EUA / 14</h2>
          </div>
          <Seasons />
        </div>
      </div>
    )}
};