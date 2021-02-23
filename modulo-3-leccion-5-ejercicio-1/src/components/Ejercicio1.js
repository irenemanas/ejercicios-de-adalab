import "../style/App.scss";
import React from "react";

class Ejercicio1 extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      input: "",
    };
  }

  handleInput(ev) {
    this.setState({
      input: ev.target.value,
    });
  }

  render() {
    return (
      <div>
        <form>
          <input type='text' id='input' name='input' onChange={this.handleInput}></input>
        </form>
        <p>{this.state.input}</p>
      </div>
    );
  }
}

export default Ejercicio1;
