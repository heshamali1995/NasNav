import React, { Component } from 'react';
import SimilarProduct from "../../Cards/SimilarProduct";

class Similar extends Component {
  render() {
    const item = this.props.item;
    return (
        <div className="similar">
            <h3>Similar Products</h3>
            <p className="similar-text">You may like these products also</p>
            <div className="wrapper flex between items-center">
                {
                    item.similarProducts.map((product) => {
                        return (
                            <div className="similar-product pointer" key={product.id}>
                                <SimilarProduct product={product}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
  }
}

export default Similar;