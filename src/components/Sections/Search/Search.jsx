import React, { Component } from 'react';
import "./css/search.css";
// Images
import bagIcon from "../../../images/bag.svg";
import wishIcon from "../../../images/wish.svg";
import userIcon from "../../../images/user.svg";
// Components
import SearchSettings from '../../Cards/SearchSettings';

class Search extends Component {
  render() {
    const { handleClickOnCart, cartCount } = this.props;
    const items = [
      {id: 1, icon: bagIcon, text: "Cart", cart: true},
      {id: 2, icon: wishIcon, text: "Wishlist"},
      {id: 3, icon: userIcon, text: "Login"}
    ];
    return (
      <section className="search-section">
        {/* Product Section */}
        <div className="search-wrapper flex items-center container">
          {/* Search */}
          <form className="search flex items-center">
            <img src="./assets/images/search.svg" alt="search" />
            <input type="search" placeholder="Search" />
          </form>
          {/* Brand */}
          <div className="brand-logo">
            <img src="./assets/images/Adidas_logo.svg" alt="brand" />
          </div>
          {/* Items */}
          <div className="items flex items-center">
            {
              items.map((item) => {
                return (
                  <SearchSettings 
                    item={item} 
                    key={item.id} 
                    handleClickOnCart={handleClickOnCart} 
                    cartCount={cartCount} 
                  />
                )
              })
            }
          </div>
        </div>
      </section>
    )
  }
}

export default Search;