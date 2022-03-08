import React, { Component } from "react";
import icon1 from "../images/icon-1.png";
import icon2 from "../images/icon-2.png";
import icon3 from "../images/icon-3.png";
import icon4 from "../images/icon-6.png";
import icon5 from "../images/icon-7.png";
import icon6 from "../images/icon-8.png";
import icon7 from "../images/icon-9.png";
import icon8 from "../images/icon-10.png";
export default class Myskills extends Component {
  render() {
    return (
      <div>
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-md-12 my-skill">
              <h3 className="text-center">
                <span>MY</span> SKILLS
              </h3>
              <p className="text-center">
                I Like to Craft Beautiful And Scalable Web Products
              </p>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-md-6">
              <div className="row ">
                <div className="col-md-3 skill-icon">
                  <i class="fas fa-paint-brush"></i>
                </div>
                <div className="col-md-9 font-skill">
                  <h5>Design + Development</h5>
                  <p>
                    Clean, Modern Designs - optimized for Performance, Search
                    Engines, and Converting users to Customers.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 skill-icon">
                  <i class="fas fa-code"></i>
                </div>
                <div className="col-md-9 font-skill">
                  <h5>Technology</h5>
                  <p>
                    Combined all the latest technologies to a Progressive
                    Website.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 skill-icon">
                  <i class="fas fa-mobile-alt"></i>
                </div>
                <div className="col-md-9 font-skill">
                  <h5>Always Responsive</h5>
                  <p>
                    A Responsive Design Makes Your Website Accessible to All
                    Users , Regardless of their Device.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-3 text-center">
                  <div className="box-icon bg-skill pt-2">
                    <img src={icon1} width="60px" height="70px" />
                    <p className="pt-2 pb-1">HTML</p>
                  </div>
                </div>
                <div className="col-md-3 text-center">
                  <div className="box-icon bg-skill pt-2">
                    <img src={icon2} width="60px" height="70px" />
                    <p className="pt-2 pb-1">CSS</p>
                  </div>
                </div>
                <div className="col-md-3 text-center">
                  <div className="box-icon bg-skill pt-2">
                    <img src={icon3} width="60px" height="70px" />
                    <p className="pt-2 pb-1">JAVASCRIPT</p>
                  </div>
                </div>
                <div className="col-md-3 text-center">
                  <div className="box-icon bg-skill pt-2">
                    <img src={icon6} width="60px" height="70px" />
                    <p className="pt-2 pb-1">BOOTSTRAP</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 text-center">
                  <div className="box-icon bg-skill pt-2">
                    <img src={icon7} width="60px" height="70px" />
                    <p className="pt-2 pb-1">PHP (LARAVEL)</p>
                  </div>
                </div>
                <div className="col-md-3 text-center ">
                  <div className="box-icon bg-skill pt-2">
                    <img src={icon8} width="60px" height="70px" />
                    <p className="pt-2 pb-1">WORDPRESS</p>
                  </div>
                </div>
                <div className="col-md-3 text-center">
                  <div className="box-icon bg-skill pt-2">
                    <img src={icon5} width="60px" height="70px" />
                    <p className="pt-2 pb-1">FIGMA</p>
                  </div>
                </div>
                <div className="col-md-3 text-center">
                  <div className="box-icon bg-skill pt-2">
                    <img src={icon4} width="60px" height="70px" />
                    <p className="pt-2 pb-1">REACT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
