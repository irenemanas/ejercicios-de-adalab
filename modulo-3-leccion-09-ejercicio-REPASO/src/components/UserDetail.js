import { Link } from "react-router-dom";

const UserDetail = (props) => {
  return (
    <section>
      <Link to='/'>
        <span>X</span>
      </Link>
      <img src='' alt='' />
      <ul>
        <li>Género:{props.user.gender} </li>
        <li>Email: {props.user.email}</li>
        <li>Nick: {props.user.username}</li>
        <li>Ciudad: {props.user.city}</li>
        <li>País: {props.user.country}</li>
      </ul>
    </section>
  );
};

export default UserDetail;
