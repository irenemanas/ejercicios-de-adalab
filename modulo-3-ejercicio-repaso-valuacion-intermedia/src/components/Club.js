import "../style/App.scss";
const club = (props) => {
  const itemMembers = props.clubProp.members.map((member, index) => {
    return <li key={index}>{member}</li>;
  });
  return (
    <article className='container__article'>
      <h2>{props.clubProp.name}</h2>
      <i className={props.clubProp.fa}></i>
      <h4>Members</h4>
      <ul className='container__article--members'>{itemMembers}</ul>
    </article>
  );
};
export default club;
