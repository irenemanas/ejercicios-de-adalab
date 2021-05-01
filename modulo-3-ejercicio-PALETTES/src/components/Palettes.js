import React, { useState } from "react";

const Palettes = () => {
  const [selectedPalette, setSelectedPalette] = useState("ROJO");

  const handleChangePalette = (ev) => {
    setSelectedPalette(ev.currentTarget.value);
  };
  return (
    <form className='form'>
      <input
        type='radio'
        name='palette'
        className='form__radio--1'
        value='ROJO'
        onChange={handleChangePalette}
        checked={selectedPalette === "ROJO"}
      />
      <label>Color 1</label>
      <input
        type='radio'
        name='palette'
        className='form__radio--2'
        value='AZUL'
        onChange={handleChangePalette}
        checked={selectedPalette === "AZUL"}
      />
      <label>Color 2</label>

      <input
        type='radio'
        name='palette'
        className='form__radio--3'
        value='VERDE'
        onChange={handleChangePalette}
        checked={selectedPalette === "VERDE"}
      />
      <label>Color 3</label>

      <p className='color-selected'>{selectedPalette}</p>
    </form>
  );
};

export default Palettes;
