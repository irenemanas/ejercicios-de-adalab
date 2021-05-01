import "../style/App.scss";
import React, { useState } from "react";

const Reset = () => {
  const [email, setEmail] = useState("");

  const handleEmail = (ev) => {
    setEmail(ev.currentTarget.value);
  };
  const handleReset = () => {
    setEmail("");
  };
  const handleForm = (ev) => {
    ev.preventDefault();
  };

  return (
    <div>
      <h1 className='title'>Formularios en react 2</h1>
      <form className='form' onSubmit={handleForm}>
        <label htmlFor='email'>Escribe aquí tu email:</label>
        <input className='input-reset' type='text' name='email' id='email' value={email} onChange={handleEmail} />
        <button className='reset-btn' onClick={handleReset}>
          Reset
        </button>
      </form>
      <p className='text-container'>Tu email es: {email}</p>
    </div>
  );
};

export default Reset;
