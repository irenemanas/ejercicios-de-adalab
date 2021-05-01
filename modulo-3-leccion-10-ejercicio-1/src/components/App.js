import "../style/App.scss";
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home.js";
import Counter from "./Counter.js";
import Relax from "./Relax.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/counter'>Counter</Link>
              </li>
              <li>
                <Link to='/relax'>Relax</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/relax' component={Relax} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
