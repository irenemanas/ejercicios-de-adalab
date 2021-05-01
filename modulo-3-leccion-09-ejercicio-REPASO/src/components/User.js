import { Link } from "react-router-dom";

const User = (props) => {
  return (
    <li className='card'>
      <Link to={`/user/${props.user.id}`}>
        <img className='card__img' src={props.user.image} alt={`Foto de ${props.user.name}`} />
        <h4 className='card__title'>
          {props.user.name} {props.user.lastname}
        </h4>
        <p className='card__description'>
          {props.user.city} / {props.user.gender}
        </p>
      </Link>
    </li>
  );
};
export default User;
