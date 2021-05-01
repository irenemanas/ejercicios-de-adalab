import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.incrementCounter = this.incrementCounter.bind(this);
  }
  componentDidMount() {
    // guardamos el identificador del interval para limpiarlo en componentWillUnmount
    this.intervalId = setInterval(this.incrementCounter, 1000);
    // NOTA: guardamos el identificador en un atributo de la clase y
    // no en el estado ya que no queremos pintar el identificador en el DOM
    console.log("Se está ejecuntando el método componentDidMount");
  }
  componentWillUnmount() {
    // limpiamos el interval
    clearInterval(this.intervalId);
    console.log("Se está ejecuntando el método componentWillUnmount");
  }
  incrementCounter() {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
    console.log("Se está ejecuntando el método incrementCounter");
  }
  render() {
    return <div>Contador: {this.state.counter}</div>;
  }
}
export default Counter;
