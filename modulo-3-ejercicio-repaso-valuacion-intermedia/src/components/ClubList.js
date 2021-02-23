import React from "react";
import "../style/App.scss";
import Club from "./Club";

class ClubList extends React.Component {
  render() {
    console.log(this.props.clubs);
    const item = this.props.clubs.map((clubItem, index) => {
      return (
        <li key={index} id={index} className='container'>
          <Club clubProp={clubItem} />
        </li>
      );
    });
    return (
      <div>
        <ul>{item}</ul>
      </div>
    );
  }
}

export default ClubList;
