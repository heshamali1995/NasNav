import React, { Component } from 'react';

class SearchSettings extends Component {
  render() {
    const { handleClickOnCart, item, cartCount } = this.props;
    return (
        <div className={`flex items-center pointer ${item.cart ? "cart" : ""}`}
            onClick={item.cart ? handleClickOnCart : null}>
            <div className="cart-number" style={{ display: item.cart ? "block" : "none" }}>
                <p>{cartCount}</p>
            </div>
            <img src={item.icon} alt="icon" />
            <p>{item.text}</p>
        </div>
    )
  }
}

export default SearchSettings;