import React, { Component } from 'react';
import "./css/navbar.css";
import { Link, Outlet } from "react-router-dom";
// Images
import contactIcon from "../../../images/contact.svg";
import cartIcon from "../../../images/cart.svg";
import storeIcon from "../../../images/store.svg";
// Components
import NavSettings from "../../Cards/NavSettings";

class Navbar extends Component {
  render() {
    const settings = [
      {id: 1, icon: contactIcon, text: "Contact Us"},
      {id: 2, icon: cartIcon, text: "Track Order"},
      {id: 3, icon: storeIcon, text: "Find A Store"}
    ];
    return (
      <>
        <nav>
          <div className="nav-wrapper flex items-center container">
            {/* Logo Section */}
            <div className="logo flex items-center">
              <img src="./assets/images/setting-bar.svg" alt="setting-bar" className="menu pointer" />
              <Link to="/">
                <img src="./assets/images/logo-black.svg" alt="logo" className="pointer" />
              </Link>
            </div>
            {/* Offers Section */}
            <div className="offers flex items-center">
              <img src="./assets/images/left-arrow.svg" alt="left-arrow" className="pointer" />
              <div className="offers-text">
                <p>Valentine's Day Offers! Buy Two Get One Free&nbsp;<span className="pointer">Shop Now</span></p>
              </div>
              <img src="./assets/images/right-arrow.svg" alt="right-arrow" className="pointer" />
            </div>
            {/* Settings Section */}
            <div className="settings flex between">
              {
                settings.map((elem) => {
                  return (
                    <NavSettings elem={elem} key={elem.id} />
                  )
                })
              }
            </div>
          </div>
        </nav>
        <Outlet />
      </>
    )
  }
}

export default Navbar;