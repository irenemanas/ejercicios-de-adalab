import "../style/App.scss";
import OnionHater from "./OnionHater";
import Destiny from "./Destiny";
import Bipolar from "./Bipolar";
import Ejercicio1 from "./Ejercicio1";
import Square from "./Square";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>¿Te gusta la cebolla?</p>
        <OnionHater />
        <Destiny />
        <Bipolar />
        <Ejercicio1 />
        <Square />
      </header>
    </div>
  );
}

export default App;
