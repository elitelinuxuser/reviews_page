import React, { Component } from "react";
import Nav from "./nav";

class Header extends Component {
  render() {
    return (
      <header>
        <Nav />
        <div className="head">
          <h1>We Provide Reviews</h1>
          <div>
            <p>
              Struggling to get reviews from users? Is not getting good reviews
              affecting the reputation of your organisation? You came to right
              place. We provide positive reviews on various platforms.
            </p>
            {/* <div>
              <a className="contact" href="#">
                Contact Us
              </a>
            </div> */}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
