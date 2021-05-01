import "../style/App.scss";
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home.js";
import Pricing from "./Pricing.js";
import About from "./About.js";

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
                <Link to='/pricing'>Pricing</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/pricing' component={Pricing} />
            <Route path='/about' component={About} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
