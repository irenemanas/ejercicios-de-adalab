import "../style/App.scss";

function Pokemon(props) {
  return (
    <article>
      <h2>{props.pokProp.name}</h2>
      <p>{props.pokProp.types}</p>
      <img src={props.pokProp.url} alt='Pokemon' />
    </article>
  );
}

export default Pokemon;
