import React, { Component } from 'react';

class SimilarProduct extends Component {
  render() {
    const product = this.props.product;
    return (
      <>
        <div className="circle">
            <img src="./assets/images/360-small.png" alt="circle" />
        </div>
        <div className="item-img">
            <img src={product.image} alt={product.text} />
        </div>
        <p className="item-text">{product.text}</p>
        <div className="price-section flex between items-center">
            <div className="price">
                <p className="offer">{product.priceAfterDiscount} LE</p>
                <div className="disc flex">
                    <p className="reg-price">{product.price} LE</p>
                    <p className="discount">{product.discount}</p>
                </div>
            </div>
            <div className="logo">
                <img src={product.brand} alt="logo" />
            </div>
        </div>
        <div className="rating flex">
            <div className="stars">
                <img src="./assets/images/star-fill.png" alt="star" />
                <img src="./assets/images/star-fill.png" alt="star" />
                <img src="./assets/images/star-fill.png" alt="star" />
                <img src="./assets/images/star-fill.png" alt="star" />
                <img src="./assets/images/star.png" alt="star" />
            </div>
            <div className="number">
                <p>{product.rating} of 5</p>
            </div>
        </div>
        <div className="pickup">
            <p>Pickup From: <span>{product.pickup}</span></p>
        </div>
      </>
    )
  }
}

export default SimilarProduct;