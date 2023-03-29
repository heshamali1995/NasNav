import React, { Component } from 'react';
import "./css/cart.css";
// Components
import CartItem from "../../Cards/CartItem";

class Cart extends Component {
  render() {
    const { openCart, cartList, handleClickOnCart, handleRemoveItem } = this.props;
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
                      <CartItem item={elem} handleRemoveItem={handleRemoveItem} />
                    </div>
                  )
                })
              }
              <p className="total-cart-price">Total Items in Cart: {(cartList.reduce((acc, index) => {
                return acc += (parseFloat(index.item.priceAfterDiscount.replace(/[^\d\.]*/g, "")) * index.quantity)
              }, 0)).toLocaleString()} LE</p>
            </div>
          )
        }
      </section>
    )
  }
}

export default Cart;