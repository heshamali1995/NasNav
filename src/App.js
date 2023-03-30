import React, { Component, lazy, Suspense } from 'react';
import "./sass/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import Navbar from "./components/Shared/Navbar/Navbar";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Layout from './pages/Layout/Layout';
import Spinner from "./components/Sections/Spinner/Spinner";
import Footer from './components/Shared/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      openCart: false,
      cartCount: 0,
      cartList: [],
      cartQuantities: 0
    }
  }

  // Show Cart Section
  handleClickOnCart = (e) => {
    this.setState({
      openCart: !this.state.openCart
    })
  }

  // Click Anywhere To Close The Cart
  handleCloseCart = (e) => {
    if (this.state.openCart === true) {
      if (!e.target.closest(".cart") && !e.target.closest(".cart-section") && !e.target.closest(".price")) {
        this.setState({
          openCart: false
        })
      }
    }
    else {
      return;
    }
  }

  // Increment Cart
  incrementCart = (elem, quantity) => {
    if (!this.state.cartList.some((item) => item.id === elem.id)) {
      this.state.cartList.push(elem);
    }
    this.setState({
      cartQuantities: this.state.cartQuantities + quantity,
      cartCount: 1
    })
  }

  // Remove Item
  handleRemoveItem = (e) => {
    this.setState({
      cartList: this.state.cartList.filter((elem) => elem !== e),
      cartCount: this.state.cartCount - 1,
      cartQuantities: 0
    })
  }
  
  componentDidMount() {
      window.addEventListener("click", this.handleCloseCart);
  }
  render() {
    const Cart = lazy(() => import("./components/Sections/Cart/Cart"));
    return (
      <BrowserRouter basename="/NasNav">
        <div className={`app ${this.state.openCart ? "open": ""}`}>
          <Suspense fallback={<Spinner />}>
            <div className="overlay" style={{ display: this.state.openCart ? "block": "none"}}>
              <Cart
                openCart={this.state.openCart}
                cartList={this.state.cartList}
                handleClickOnCart={this.handleClickOnCart}
                handleRemoveItem={this.handleRemoveItem}
                cartQuantities={this.state.cartQuantities}
              />
            </div>
          </Suspense>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <Layout
                handleClickOnCart={this.handleClickOnCart}
                incrementCart={this.incrementCart}
                cartCount={this.state.cartCount}
              />
            }/>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;