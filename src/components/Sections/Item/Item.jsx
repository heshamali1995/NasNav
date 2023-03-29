import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        quantity: 1
      }
    }
    // Quantity Of The Product
    increaseQuantity = (e) => {
        this.setState((prev) => {
            return {
                quantity: prev.quantity + 1
            }
        })
    }
    decreaseQuantity = (e) => {
        this.setState((prev) => {
            if (prev.quantity !== 1) {
                return {
                    quantity: prev.quantity - 1
                }
            }
            else {
                return;
            }
        })
    }
    handleMoveLeft = (e) => {
        e.target.parentElement.previousElementSibling.scrollLeft += 130
    }
    handleMoveRight = (e) => {
        e.target.parentElement.nextElementSibling.scrollLeft -= 130
    }
  render() {
    const { item, incrementCart } = this.props;
    return (
        <div className="item flex between">
            {/* Item Image */}
            <div className="item-image">
                <div className="model">
                    <img src={item.fullImage} alt="model" />
                    <div className="circle">
                        <img src="./assets/images/360.png" alt="circle"/>
                    </div>
                </div>
                <div className="images flex items-center">
                    <div className="pointer" >
                        <img src="./assets/images/overflow-left.png" alt="arrow" onClick={this.handleMoveRight}/>
                    </div>
                    <div className="img-wrapper flex items-center">
                        {
                            item.otherImages.map((elem) => {
                                return (
                                    <div className="pointer" key={elem.id}>
                                        <img src={elem.src} alt="recommended" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="pointer">
                        <img src="./assets/images/overflow-right.png" alt="arrow" onClick={this.handleMoveLeft}/>
                    </div>
                </div>
            </div>
            {/* Item Details */}
            <div className="item-details">
                <div className="item-img">
                    <img src={item.brand} alt={item.text} />
                </div>
                <p className="item-text">{item.text}</p>
                <p className="item-category">{item.category}</p>
                <div className="rating flex">
                    <div className="stars">
                        <img src="./assets/images/star-fill.png" alt="star" />
                        <img src="./assets/images/star-fill.png" alt="star" />
                        <img src="./assets/images/star-fill.png" alt="star" />
                        <img src="./assets/images/star-fill.png" alt="star" />
                        <img src="./assets/images/star.png" alt="star" />
                    </div>
                    <div className="number">
                        <p>{item.rating} of 5</p>
                    </div>
                    <div className="rates">
                        <p>{item.numOfRates} rates</p>
                    </div>
                </div>
                <div className="prices flex">
                    <p className="price">{item.priceAfterDiscount} LE</p>
                    <p className="reg-price">{item.price} LE</p>
                    <p className="discount">{item.discount} Off</p>
                </div>
                <div className="sizes">
                    <h3>Size</h3>
                    <div className="size-wrapper flex">
                        {
                            item.availableSizes.map((elem) => {
                                return (
                                    <div className="size pointer" key={elem.id}>
                                        <p>{elem.size}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="colors">
                    <h3>Color</h3>
                    <div className="color-wrapper flex">
                        {
                            item.colors.map((color) => {
                                return (
                                    <div className="color pointer" key={color.id}>
                                        <img src={color.image} alt="color" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="quantity">
                    <h3>Quantity</h3>
                    <div className="button flex items-center">
                        <div className="button-wrapper flex items-center between">
                            <div className="minus pointer" onClick={this.decreaseQuantity}>
                                <img src="./assets/images/minus.png" alt="minus" />
                            </div>
                            <p>{this.state.quantity}</p>
                            <div className="plus pointer" onClick={this.increaseQuantity}>
                                <img src="./assets/images/plus.png" alt="plus" />
                            </div>
                        </div>
                    </div>
                    <div className="add flex items-center between">
                        <button className="cart pointer" onClick={() => incrementCart({item}, this.state.quantity)}>Add To Cart</button>
                        <button className="store pointer">Pickup From Store</button>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Item;