import React, { Component } from "react";
import profileImage from "../my-pic.jpg";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-6 ">
              <div className="v-align">
                <h3>hi, i am sana shaikh</h3>
                <span>Web Developer</span>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                  porro facere expedita ab atque a consectetur odit vel soluta
                  itaque.
                </p>
                <Link to="/about" class="btn-main">
                  About Me
                  <i class="fas fa-user"></i>
                </Link>
              </div>
            </div>
            <div className="col-md-6 profileimage">
              <img src={profileImage} width="100%" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
