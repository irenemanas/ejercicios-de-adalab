import React from "react";
import getDataFromApi from "../services/Api";
import "../style/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [],
      filterText: "",
      filterLanguage: "",
      isLoading: true,
    };

    this.handleFilterText = this.handleFilterText.bind(this);
    this.handleFilterLanguage = this.handleFilterLanguage.bind(this);
  }

  handleFilterText(ev) {
    this.setState({
      filterText: ev.target.value,
    });
    localStorage.setItem()
    getDataFromApi(ev.target.value).then((data) => {
      console.log(data);
      this.setState({
        series: data,
        isLoading: false,
      });
    });
  }

  handleFilterLanguage(ev) {
    this.setState({
      filterLanguage: ev.target.value,
    });
  }

  renderSeriesList() {
    // si quieres ver este método como si fuera un poema abre AppPoem.js
    return this.state.series
      .filter((serie) => {
        return serie.show.name.toLowerCase().includes(this.state.filterText.toLowerCase());
      })
      .filter((serie) => {
        return serie.show.language.toLowerCase().includes(this.state.filterLanguage.toLowerCase());
      })
      .map((serie) => {
        return <li key={serie.show.id}>Nombre: {serie.show.name}</li>;
      });
  }

  render() {
    return (
      <div className='page'>
        <h1>Fetch</h1>
        <p>{this.state.isLoading ? "Cargando.." : ""}</p>

        <p>
          Explicación: estamos llamando al API por la serie "friends" ya que esta devuelve series en English, Japanese,
          Korean... y así sí podemos filtrar por idioma.
        </p>

        <input className='input' type='text' onChange={this.handleFilterText} placeholder='filter by name' />
        <input className='input' type='text' onChange={this.handleFilterLanguage} placeholder='filter by language' />

        <ul className='shows__container'>{this.renderSeriesList()}</ul>
      </div>
    );
  }
}

export default App;
