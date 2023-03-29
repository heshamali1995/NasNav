import React, { Component } from 'react';

class Filter extends Component {
  render() {
    const context = this.props.context;
    return (
      <>
        <p className="pointer">{context}</p>
        <span>/</span>
      </>
    )
  }
}

export default Filter;