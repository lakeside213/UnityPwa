import React, { Component } from "react";

class Clickaway extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.myRef = React.createRef();
  }
  componentWillMount() {
    document.addEventListener("click", this.handleClick, false);
  }

  componentWillUnmount() {
    // remember to remove all events to avoid memory leaks
    document.removeEventListener("click", this.handleClick, false);
  }
  handleClick(event) {
    const { onClickOutside } = this.props;
    const { target } = event;

    // if there is no proper callback - no point of checking
    if (typeof onClickOutside !== "function") {
      return;
    }

    // if target is container - container was not clicked outside
    // if container contains clicked target - click was not outside of it
    if (target !== this.myRef && !this.myRef.current.contains(target)) {
      onClickOutside(event); // clicked outside - fire callback
    }
  }

  render() {
    return <div ref={this.myRef}>{this.props.children}</div>;
  }
}

export default Clickaway;
