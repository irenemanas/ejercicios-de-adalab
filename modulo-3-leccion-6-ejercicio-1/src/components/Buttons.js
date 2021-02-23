import "../style/App.scss";

const Buttons = (props) => {
  const getAge = () => {
    props.age();
  };
  const getPresent = () => {
    props.present();
  };

  return (
    <div>
      <button type='button' onClick={getAge}>
        Hazme más vieja
      </button>
      <p>Hoy tengo {props.year} años de edad</p>
      <button type='button' onClick={getPresent}>
        Dame regalos
      </button>
      <p>Tengo {props.gift} regalos</p>
    </div>
  );
};

export default Buttons;
