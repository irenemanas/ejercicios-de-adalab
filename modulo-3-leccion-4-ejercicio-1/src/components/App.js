import "../style/App.scss";
import OnionHater from "./OnionHater";
import Destiny from "./Destiny";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>¿Te gusta la cebolla?</p>
        <OnionHater />
        <Destiny />
      </header>
    </div>
  );
}

export default App;
