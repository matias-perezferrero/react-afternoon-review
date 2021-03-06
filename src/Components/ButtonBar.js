import React, { Component } from "react";

class ButtonBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="button-bar">
        <button
          className="navigation-button"
          onClick={this.props.handlePrevious}
        >{`< Previous`}</button>
        <div id="functional-button-container">
          <button className="functional-button">Edit</button>
          <button className="functional-button">Delete</button>
          <button className="functional-button">New</button>
        </div>
        <button
          className="navigation-button"
          onClick={this.props.handleNext}
        >{`    Next >`}</button>
      </div>
    );
  }
}

export default ButtonBar;
