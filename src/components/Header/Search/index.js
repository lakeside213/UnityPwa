import React, { Component } from "react";

class Search extends Component {
  render() {
    const { toggle } = this.props;
    return (
      <div className="header__search">
        <form action="#">
          <label>
            <i
              onClick={toggle}
              className="icon-Search js-header-search-btn-open"
            />
            <input
              type="search"
              placeholder="Search all forums"
              className="form-control"
            />
          </label>
        </form>
        <div
          className="header__search-close js-header-search-btn-close"
          onClick={toggle}
        >
          <i className="icon-Cancel" />
        </div>
      </div>
    );
  }
}

export default Search;
