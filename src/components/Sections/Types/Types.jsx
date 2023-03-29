import React, { Component } from 'react';
import "./css/types.css";
// Components
import Filter from "../../Cards/Filter";

class Types extends Component {
  render() {
    const items = [
      {id: 1, name: "Men"},
      {id: 2, name: "Women"},
      {id: 3, name: "Unisex"},
      {id: 4, name: "Kids"},
      {id: 5, name: "Best Sellers"},
      {id: 6, name: "New Arrivals"},
      {id: 7, name: "Offers", active: true},
    ];
    return (
      <section className="types-section">
        {/* Products Types */}
        <div className="types">
          <div className="types-wrapper between container">
            {
              items.map((type) => {
                return (
                  <div key={type.id}>
                    <p className={`pointer ${type.active ? "active" : ""}`}>{type.name}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
        {/* Filter Section */}
        <div className="filter">
          <div className="filter-wrapper flex container">
            <Filter context="Men" />
            <Filter context="Clothing" />
            <Filter context="Tops" />
            <Filter context="Adidas" />
            <Filter context="Adidas Black T-Shirt" />
          </div>
        </div>
      </section>
    )
  }
}

export default Types;