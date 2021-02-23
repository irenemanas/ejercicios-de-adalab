import React, { useState } from "react";
import "../style/App.scss";
import Buttons from "./Buttons";

function App() {
  const [age, setAge] = useState(20);
  const addNumber = () => age + 1;
  const [present, setPresent] = useState(1);
  const addPresent = () => present + 1;

  const handleButton = () => {
    setAge(addNumber());
  };
  const handlePresentClick = () => {
    setPresent(addPresent());
  };

  return (
    <div className='App'>
      <Buttons age={handleButton} year={age} present={handlePresentClick} gift={present} />
    </div>
  );
}

export default App;
