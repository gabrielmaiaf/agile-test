import React, { Component } from 'react';
import Elenco from './Components/Elenco';
import Geral from './Components/Geral';
import _ from 'lodash';
import DummyElenco from './Components/Dummyelenco';

const tvshow = "https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json";

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data2: [],
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
      fetch(tvshow)
      .then(d => d.json())
      .then(dat => {
        console.log(dat);
        this.setState({
          data2: dat
        });
      })
      .catch(err => {
        console.log("Something lead to an error", err);
      });
  }

  render() {
    let style1 = { display: this.state.disp1 },
        style2 = { display: this.state.disp2 },
        style3 = { display: this.state.disp3 },
        cast = _.range(4,7),
        classe1 = this.state.act1,
        classe2 = this.state.act2,
        classe3 = this.state.act3;
    return (
      <footer id="footer">
        <div>
          <div className="titlesline">
            <span className={"in-titles " + classe1} onClick={e => this.toggleOne(1)}>GERAL</span>
            <span className={"in-titles " + classe2} onClick={e => this.toggleOne(2)}>ELENCO</span>
            <span className={"in-titles " + classe3} onClick={e => this.toggleOne(3)}>PRINCIPAIS PRÊMIOS</span>
            <img src="http://webportal.nowonline.com.br/img/channels/tele_cine.png" alt="Telecine logo" />
          </div>
          <div style={style1}>
              <Geral 
                synopsis={this.state.data2.Synopsis}
              />
          </div>
          <div id="elenco" style={style2}>
            <div className="flex">
            {this.state.data2.Cast && this.state.data2.Cast.map((item) =>
              <Elenco
                key={item.ID}
                id={item.ID}
                name={item.Name}
              />
            )}
            {cast.map((item) =>
              <DummyElenco id={"PER-0" + item} key={"PER-0" + item}/>
            )}
          </div>
          </div>
          <div style={style3}>
          </div>
        </div>
      </footer>
    );
  }
};