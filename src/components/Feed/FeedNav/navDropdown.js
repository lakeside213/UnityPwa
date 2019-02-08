import React, { Component } from "react";

class Dropdown extends Component {
  state = {
    dropdownOpen: false
  };
  handleClick = event => {
    this.setState(prevState => {
      return { dropdownOpen: !prevState.dropdownOpen };
    });
  };
  handleClose = event => {
    this.setState({ dropdownOpen: false });
  };

  render() {
    let { dropdownOpen } = this.state;
    const { name, children } = this.props;
    return (
      <div className="nav__select">
        <div
          className={
            dropdownOpen ? "btn-select dropdown__btn--open" : "btn-select"
          }
          onClick={this.handleClick}
        >
          {name}
        </div>
        <nav
          className={
            dropdownOpen
              ? "dropdown dropdown--design-01 dropdown--open"
              : "dropdown dropdown--design-01 "
          }
        >
          {children}
        </nav>
      </div>
    );
  }
}

export default Dropdown;
