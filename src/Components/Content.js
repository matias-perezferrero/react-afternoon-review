import React, { Component } from "react";
import ButtonBar from "./ButtonBar";
import data from "../data";

class Content extends Component {
  constructor() {
    super();

    this.state = {
      list: data,
      i: 0
    };
  }

  render() {
    return (
      <div className="main-content-container">
        <div id="page-number">{this.state.i}/25</div>
        <div id="content">
          <h2 id="name">
            {this.state.list[this.state.i].name.first}{" "}
            {this.state.list[this.state.i].name.last}
          </h2>
          <div id="demographics-container">
            <div className="demographics-info">
              <h4>From:</h4>
              <p>
                {this.state.list[this.state.i].city},{" "}
                {this.state.list[this.state.i].country}
              </p>
            </div>
            <div className="demographics-info">
              <h4>Job Title:</h4>
              <p>{this.state.list[this.state.i].title}</p>
            </div>
            <div className="demographics-info">
              <h4>Employer:</h4>
              <p>{this.state.list[this.state.i].employer}</p>
            </div>
          </div>
          <div id="favorites">
            <h4>Favorite Movies:</h4>
            <ol>
              <li>{this.state.list[this.state.i].favoriteMovies[0]}</li>
              <li>{this.state.list[this.state.i].favoriteMovies[1]}</li>
              <li>{this.state.list[this.state.i].favoriteMovies[2]}</li>
            </ol>
          </div>
        </div>
        <ButtonBar />
      </div>
    );
  }
}

export default Content;
