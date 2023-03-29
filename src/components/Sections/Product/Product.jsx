import React, { Component } from 'react';
import "./css/product.css";
// Components
import Item from '../Item/Item';
import Similar from '../Similar/Similar';
import { services } from '../../../services/API';

class Product extends Component {
    render() {
        const { incrementCart } = this.props;
        return (
            <section className="product">
                {
                    services?.map((item) => {
                        return (
                            <div className="product-wrapper container" key={item.id}>
                                <Item 
                                    item={item} 
                                    incrementCart={incrementCart}
                                />
                                <Similar item={item}/>
                            </div>
                        )
                    })
                }
            </section>
        )
    }
}

export default Product;