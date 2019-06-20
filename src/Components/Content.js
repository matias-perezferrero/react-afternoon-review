import React, { Component } from "react";
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
      <div className="main-content">
        <div id="page-number">{this.state.i}/25</div>
        <div id="content">
          <h2>
            {data[this.state.i].name.first} {data[this.state.i].name.last}
          </h2>
          <div />
          <div />
        </div>
      </div>
    );
  }
}

export default Content;
