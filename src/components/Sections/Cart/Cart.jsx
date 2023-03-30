import React, { Component } from 'react';
import "./css/cart.css";
// Components
import CartItem from "../../Cards/CartItem";

class Cart extends Component {
  render() {
    const { openCart, cartList, handleClickOnCart, handleRemoveItem, cartQuantities } = this.props;
    return (
      <section className={`cart-section ${openCart ? "animate": ""}`}>
        <div className="xbutton">
          <img src="./assets/images/XButton.png" alt="XButton" className="pointer" onClick={handleClickOnCart} />
        </div>
        <h3>My Cart</h3>
        <h4 className="summary">Cart Summary</h4>
        {
          cartList.length === 0 ? (
            <h4 className="empty">You Have No Items yet...</h4>
          ) : (
            <div className="items">
              {
                cartList?.map((elem) => {
                  return (
                    <div className="item-wrapper" key={Math.random() * 1000}>
                      <CartItem item={elem} handleRemoveItem={handleRemoveItem} cartQuantities={cartQuantities} />
                    </div>
                  )
                })
              }

            </div>
          )
        }
      </section>
    )
  }
}

export default Cart;