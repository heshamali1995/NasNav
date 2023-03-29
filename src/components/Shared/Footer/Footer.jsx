import React, { Component } from 'react';
import "./css/footer.css";
// Images
import Facebook from "../../../images/facebook.svg";
import Linkedin from "../../../images/linkedin.svg";
import Instagram from "../../../images/instagram.svg";
import Twitter from "../../../images/twitter.svg";
import Sponsor1 from "../../../images/rect1.png";
import Sponsor2 from "../../../images/rect2.png";
import Sponsor3 from "../../../images/rect3.png";

class Footer extends Component {
  render() {
    const lists = [
      {id: 1, text: "About Us"},
      {id: 2, text: "Contact Us"},
      {id: 3, text: "Track Order"},
      {id: 4, text: "Terms & Conditions"},
      {id: 5, text: "Privacy Policy"},
      {id: 6, text: "Sell With Us"},
      {id: 7, text: "Shipping & Returns"}
    ];
    const socials = [
      {id: 1, image: Facebook, text: "/YESHTERY"},
      {id: 2, image: Linkedin, text: "/YESHTERY"},
      {id: 3, image: Instagram, text: "/YESHTERY"},
      {id: 4, image: Twitter, text: "/YESHTERY"}
    ];
    const sponsors = [
      {id: 1, image: Sponsor1},
      {id: 2, image: Sponsor2},
      {id: 3, image: Sponsor3}
    ];
    return (
      <footer>
        <div className="footer-wrapper container">
          {/* Footer Text */}
          <div className="footer-text flex between">
            <div className="text">
              <img src="./assets/images/logo-yellow.svg" alt="logo" className="image" />
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
              <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia</p>
              <p>m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis</p>
            </div>
            <div className="form">
              <h4>Subscribe to our newsletter</h4>
              <div className="email flex between">
                <input type="email" placeholder="Enter Your Email" />
                <div className="pointer flex">
                  <button>Subscribe</button>
                  <img src="./assets/images/subscribe.svg" alt="subscribe" />
                </div>
              </div>
              <div className="lists flex">
                <ul>
                  {
                    lists.map((list) => {
                      return <li key={list.id}>{list.text}</li>
                    })
                  }
                </ul>
                <div className="socials">
                  {
                    socials.map((social) => {
                      return (
                        <div className="flex items-center" key={social.id}>
                          <img src={social.image} alt="social" />
                          <p>{social.text}</p>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          {/* Footer Copyrights */}
          <div className="footer-coprights flex items-center">
            <div className="copy">
              <p>&copy; 2021 yeshtery, all rights reserved.</p>
            </div>
            <div className="sponsors">
              {
                sponsors.map((sponsor) => {
                  return <img src={sponsor.image} alt="Sponsor" key={sponsor.id} />
                })
              }
            </div>
            <div className="powered flex items-center">
              <p>Powered By</p>
              <img src="./assets/images/nasnav.png" alt="nasnav" />
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;