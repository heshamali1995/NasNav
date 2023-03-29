import React, { Component } from 'react';
// Components
import Search from "../../components/Sections/Search/Search";
import Types from "../../components/Sections/Types/Types";
import Product from "../../components/Sections/Product/Product";

class Layout extends Component {
  render() {
    const {
       handleClickOnCart,
       incrementCart, 
       cartCount
      } = this.props;
    return (
      <main>
        <Search handleClickOnCart={handleClickOnCart} cartCount={cartCount}/>
        <Types />
        <Product incrementCart={incrementCart}/>
      </main>
    )
  }
}

export default Layout;