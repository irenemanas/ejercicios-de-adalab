import React from "react";
import CatItem from "./CatItem";

class CatList extends React.Component {
  //constructor(props) {
  //super(props);

  //bind
  //this.state

  //}
  render() {
    return (
      <ul className='section-cats_list'>
        <CatItem name='A cat' src='200/200' />
        <CatItem name='Another cat' src='200/400' />
        <CatItem name='Moar cat' src='400/200' />

        {/*<li>
          <a href='http://lorempixel.com'>Another cat</a>
          <img src='http://lorempixel.com/200/400/cats/' alt='' />
        </li>
        <li>
          <a href='http://lorempixel.com'>Moar cat</a>
          <img src='http://lorempixel.com/400/200/cats/' alt='' />
        </li>*/}
      </ul>
    );
  }
}

export default CatList;
