import "../style/App.scss";

function OnionHater() {
  const onChangeListener = (ev) => {
    if (ev.target.value.includes("cebolla")) {
      alert("YO ODIO LA CEBOLLA");
    }
  };

  return <textarea className='container viewport' onChange={onChangeListener}></textarea>;
}

export default OnionHater;
