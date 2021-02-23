function Destiny() {
  const onChangeListener = (ev) => {
    console.log(ev.currentTarget.value);
    alert(`Tu destino es viajar a ${ev.currentTarget.value}`);
  };

  return (
    <select onChange={onChangeListener} className='container select'>
      <option value='Buenos Aires'>Buenos Aires</option>
      <option value='Sydney'>Sydney</option>
      <option value='Praga'>Praga</option>
      <option value='Boston'>Boston</option>
      <option value='Tokio'>Tokio</option>
    </select>
  );
}

export default Destiny;
