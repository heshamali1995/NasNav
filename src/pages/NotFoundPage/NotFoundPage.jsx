import React, { Component } from 'react';
import "./css/notfound.css";

class NotFoundPage extends Component {
  render() {
    return (
        <div className="notfound">
            <div className="container">
                <h2>
                    OOPS !
                </h2>
                <p>
                    The page you are looking for does not exist !
                </p>
                <img
                    src="./assets/images/not-found.gif"
                    alt="notfound..."/>
            </div>
        </div>
    )
  }
}

export default NotFoundPage;