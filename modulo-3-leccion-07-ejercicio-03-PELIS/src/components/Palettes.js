import React, { useState } from "react";

const Palettes = () => {
  const [selectedPalette, setSelectedPalette] = useState("ROJO");

  const handleChangePalette = (ev) => {
    // const newValue = ev.currentTarget.value;

    setSelectedPalette(ev.currentTarget.value);

    // console.log(palette);
  };
  return (
    <>
      <label className='display-block design__square-label'>
        <input
          type='radio'
          name='palette'
          className='design__square-radio js_palette-select'
          value='ROJO'
          onChange={handleChangePalette}
          checked={selectedPalette === "ROJO"}
        />
        <ul className={`palette-1-election`}>
          <li className='design__square-color color-1'>Color 1</li>
          {/* <li className="design__square-color color-2">Color 1</li>
          <li className="design__square-color color-3">Color 1</li> */}
        </ul>
      </label>
      <label className='display-block design__square-label'>
        <input
          type='radio'
          name='palette'
          className='design__square-radio js_palette-select'
          value='AZUL'
          onChange={handleChangePalette}
          checked={selectedPalette === "AZUL"}
        />
        <ul className={`palette-2-election`}>
          <li className='design__square-color color-1'>Color 2</li>
          {/* <li className="design__square-color color-2">Color 2</li>
          <li className="design__square-color color-3">Color 2</li> */}
        </ul>
      </label>
      <label className='display-block design__square-label'>
        <input
          type='radio'
          name='palette'
          className='design__square-radio js_palette-select'
          value='VERDE'
          onChange={handleChangePalette}
          checked={selectedPalette === "VERDE"}
        />
        <ul className={`palette-3}-election`}>
          <li className='design__square-color color-1'>Color 3</li>
          {/* <li className="design__square-color color-2">Color 3</li>
          <li className="design__square-color color-3">Color 3</li> */}
        </ul>
      </label>
      {selectedPalette}
    </>
  );
};

export default Palettes;
