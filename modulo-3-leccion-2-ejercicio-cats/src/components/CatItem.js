function CatItem(props) {
  return (
    <li>
      <a href='http://lorempixel.com'>{props.name}</a>
      <img src={`http://lorempixel.com/${props.src}/cats`} alt='Random cat' />
    </li>
  );
}

export default CatItem;
