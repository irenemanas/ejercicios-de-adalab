import "../style/App.scss";
import React from "react";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = false;
    this.handleChange = this.handleChange.bind(this);
  }
  // isHating() {
  //   textarea.classList.add(red);
  // }
  handleChange(ev) {
    const textareaElement = document.querySelector(".viewport");
    if (ev.target.value.includes("cebolla")) {
      this.isHating = true;
      if (this.isHating === true) {
        textareaElement.classList.add("red");
      }
      this.forceUpdate();
    } else {
      textareaElement.classList.remove("red");
    }
  }
  render() {
    return <textarea className='viewport' onChange={this.handleChange}></textarea>;
  }
}

/*function OnionHater() {
  const onChangeListener = (ev) => {
    if (ev.target.value.includes("cebolla")) {
      alert("YO ODIO LA CEBOLLA");
    }
  };

  return <textarea className='container viewport' onChange={onChangeListener}></textarea>;
}*/

export default OnionHater;
