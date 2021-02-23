import "../style/App.scss";
import React from "react";
import clubs from "../data/data.json";
import ClubList from "./ClubList";

class App extends React.Component {
  render() {
    return <ClubList clubs={clubs} />;
  }
}

export default App;
