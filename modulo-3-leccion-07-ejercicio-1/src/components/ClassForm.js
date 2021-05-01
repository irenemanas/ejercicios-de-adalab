import "../style/App.scss";
import React from "react";

class ClassForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      languaje: "",
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(ev) {
    console.log(ev.target.name, ev.target.value);
    const key = ev.target.name;
    this.setState({
      [key]: ev.target.value,
    });
  }

  renderLanguage() {
    if (this.state.languaje === "Español") {
      return "Español";
    } else if (this.state.languaje === "Inglés") {
      return "Inglés";
    } else if (this.state.languaje === "Portugués") {
      return "Portugués";
    }
  }

  render() {
    return (
      <div>
        <h1 className='title'>Formularios en react 1</h1>
        <form className='form'>
          <label htmlFor='name'>Nombre:</label>
          <input id='name' name='name' type='text' value={this.state.name} onChange={this.handleInput} />
          <label htmlFor='description'>Descripción:</label>
          <textarea
            id='description'
            name='description'
            type='text'
            value={this.state.description}
            onChange={this.handleInput}
          />
          <label htmlFor='languaje'>Idioma:</label>
          <select id='languaje' name='languaje' type='text' value={this.state.languaje} onChange={this.handleInput}>
            <option value='Español'>Español</option>
            <option value='Inglés'>Inglés</option>
            <option value='Portugués'>Portugués</option>
          </select>
          <input className='submit-btn' type='submit' value='Enviar' />
        </form>
        <div className='text-container'>
          <p>El nombre es: {this.state.name}</p>
          <p>La descripcion es: {this.state.description}</p>
          <p>El idioma es: {this.renderLanguage()}</p>
        </div>
      </div>
    );
  }
}
export default ClassForm;
