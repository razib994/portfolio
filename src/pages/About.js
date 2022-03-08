import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid bg-beautiful">
          <div className="container">
            <div className="row pt-5 pb-5">
              <div className="col-md-12 text-center about-heading p-4">
                <h3>
                  <span> About </span> Me
                </h3>
              </div>
              <div className="col-md-6 personal-heading">
                <h5 className="pb-3">personal info</h5>
                <div className="row">
                  <div className="col-md-6 about-info">
                    <h4 className="pb-2">
                      <span>Name:</span> Razibur Rahaman
                    </h4>
                    <h4 className="pb-2">
                      <span>Age: </span> 27
                    </h4>
                    <h4 className="pb-2">
                      <span>email: </span> razibeee2014@gmail.com
                    </h4>
                    <h4 className="pb-2">
                      <span>Address: </span> 11/7, Solimullah Road, Mohmmadpur,
                      Dhaka-1207
                    </h4>
                  </div>
                  <div className="col-md-6 about-info">
                    <h4 className="pb-2">
                      <span>Position:</span> Web Developer
                    </h4>
                    <h4 className="pb-2">
                      <span>experience:</span> 2 Years
                    </h4>
                    <h4 className="pb-2">
                      <span>Language :</span> Bangla, English(Good)
                    </h4>
                  </div>
                  <div className="col-md-12 pb-4">
                    <a href="#" class="btn-main">
                      Download CV
                      <i class="fas fa-download"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="box">
                      <h2>2+</h2>
                      <span>years of experience</span>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="box">
                      <h2>28+</h2>
                      <span>happy clients</span>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="box">
                      <h2>30+</h2>
                      <span>project completed</span>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="box">
                      <h2>3+</h2>
                      <span>Certificate </span>
                    </div>
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
export default About;
