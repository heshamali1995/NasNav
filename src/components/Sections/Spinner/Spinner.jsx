import React, { Component } from 'react';
import "./css/spinner.css";
import { RingLoader } from "react-spinners";

class Spinner extends Component {
  render() {
    return (
      <div className="spinner">
        <RingLoader color="#36d7b7" />
      </div>
    )
  }
}

export default Spinner;