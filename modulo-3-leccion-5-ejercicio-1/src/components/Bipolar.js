import "../style/App.scss";
import React from "react";

class Bipolar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styling: "info",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, props) => {
      let nextStyling;
      if (prevState.styling === "info") {
        nextStyling = "danger";
      } else {
        nextStyling = "info";
      }

      return {
        styling: nextStyling,
      };
    });
  }

  //this.setState((prevState, props) => ({
  //styling: prevState.styling === 'info' ? 'danger' : 'info'
  //})); este doble paréntesis se suele olvidar de primeras

  render() {
    return (
      <button className={`btn btn-${this.state.styling}`} onClick={this.handleClick}>
        {this.props.label}
      </button>
    );
  }
}
export default Bipolar;
