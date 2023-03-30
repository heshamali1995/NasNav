import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    const cartItem = this.props.item;
    const handleRemoveItem = this.props.handleRemoveItem;
    const cartQuantities = this.props.cartQuantities;
    return (
      <>
        <div className="cart-item flex items-center">
          <img src={cartItem.item.fullImage} alt="model" />
          <div className="details">
            <p className="text">Lorem ipsum dolor sit amet, consecte adipiscing elit.</p>
            <p className="span">Quantity: {cartQuantities}</p>
            <div className="price flex between">
              <p>{cartItem.item.priceAfterDiscount} <span>LE</span></p>
              <button className="pointer" onClick={() => handleRemoveItem(cartItem)}>Remove</button>
            </div>
          </div>
        </div>
        <div className="total">
          <p>Total: {(parseFloat(cartItem.item.priceAfterDiscount.replace(/[^\d\.]*/g, "")) * cartQuantities).toLocaleString()} LE</p>
          <div className="buttons flex between">
            <button className="review pointer">Review Cart</button>
            <button className="checkout pointer">Complete Checkout</button>
          </div>
        </div>
      </>
    )
  }
}

export default CartItem;