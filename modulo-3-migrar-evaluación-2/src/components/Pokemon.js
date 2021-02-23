import "../style/App.scss";

function Pokemon(props) {
  console.log(props.type);
  return (
    <li key={props.key}>
      <img src={props.url} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.type}</p>
    </li>
  );
}
export default Pokemon;
