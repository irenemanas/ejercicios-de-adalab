import "../style/App.scss";
import React from "react";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      color: "square",
    };
  }

  handleClick(ev) {
    this.setState((prevState, props) => {
      let nextColor;
      if (prevState.color === "square") {
        nextColor = "redSquare";
      } else {
        nextColor = "square";
      }
      return {
        color: nextColor,
      };
    });
  }

  render() {
    return <div className={this.state.color} onClick={this.handleClick}></div>;
  }
}

export default Square;
