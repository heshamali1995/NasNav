import React, { Component } from 'react';

class NavSettings extends Component {
  render() {
    const elem = this.props.elem;
    return (
      <div className="flex pointer items-center">
        <img src={elem.icon} alt="icon" />
        <p>{elem.text}</p>
      </div>
    )
  }
}

export default NavSettings;