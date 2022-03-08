import React, { Component } from "react";
import img1 from "../images/portfolio/1.png";
import img2 from "../images/portfolio/2.jpg";
import img3 from "../images/portfolio/3.jpg";
import img4 from "../images/portfolio/4.png";
import img5 from "../images/portfolio/5.png";
import img6 from "../images/portfolio/6.jpg";
import img7 from "../images/portfolio/7.jpg";
import img8 from "../images/portfolio/8.png";

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }
  render() {
    return (
      <div>
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-md-12 my-skill">
              <h3 className="text-center">
                <span>MY</span> WORK
              </h3>
              <p className="text-center">
                I Like to Craft Beautiful And Scalable Web Products
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 portfolio-nav">
              <ul class="nav justify-content-center">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    All
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Laravel
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    React
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Figma
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Bootstrap
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Wordpress
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-md-6 pb-4">
              <div className="images">
                <img src={img1} className="image-img" />
                <div className="img-text">
                  <a href="#">
                    <i className="fa fa-link"> </i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 pb-4">
              <div className="images">
                <img src={img2} className="image-img" />
                <div className="img-text">
                  <a href="#">
                    <i className="fa fa-link"> </i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 pb-4">
              <div className="images">
                <img src={img3} className="image-img" />
                <div className="img-text">
                  <a href="#">
                    <i className="fa fa-link"> </i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 pb-4">
              <div className="images">
                <img src={img4} className="image-img" />
                <div className="img-text">
                  <a href="#">
                    <i className="fa fa-link"> </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 pb-4">
              <div className="images">
                <img src={img5} className="image-img" />
                <div className="img-text">
                  <a href="#">
                    <i className="fa fa-link"> </i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 pb-4">
              <div className="images">
                <img src={img6} className="image-img" />
                <div className="img-text">
                  <a href="#">
                    <i className="fa fa-link"> </i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 pb-4">
              <div className="images">
                <img src={img7} className="image-img" />
                <div className="img-text">
                  <a href="#">
                    <i className="fa fa-link"> </i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 pb-4">
              <div className="images">
                <img src={img8} className="image-img" />
                <div className="img-text">
                  <a href="#">
                    <i className="fa fa-link"> </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Portfolio;
