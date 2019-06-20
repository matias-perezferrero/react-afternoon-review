import React, { Component } from "react";
import data from "../data";

class Content extends Component {
  constructor() {
    super();

    this.state = {
      list: data
    };
  }

  render() {
    return (
      <div>
        <div />
        <div />
        <div />
      </div>
    );
  }
}

export default Content;
