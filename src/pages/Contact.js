import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid bg-contact pt-5 pb-5">
          <div className="container">
            <div className="row contact">
              <div className="col-md-6">
                <h4> PERSONAL INFORMATION</h4>
                <p className="pb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  dolorem sunt sapiente vel minus eaque voluptate fugit corrupti
                  omnis tempora?
                </p>
                <div className="row pb-3">
                  <div className="col-md-1">
                    <i class="fas fa-home"></i>
                  </div>
                  <div className="col-md-11">
                    <h5> Address </h5>
                    <p> Mohmmadpur, Dhaka-1207. </p>
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-md-1">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div className="col-md-11">
                    <h5> Email </h5>
                    <p> razibeee2014@gmail.com </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-1">
                    <i class="fas fa-phone-alt"></i>
                  </div>
                  <div className="col-md-11">
                    <h5> Phone Number </h5>
                    <p> +88 01737 98 89 47 </p>
                  </div>
                </div>
                <div className="social">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <form>
                  <div className="row pb-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Phone"
                      />
                    </div>
                  </div>
                  <div className="row pb-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Subject"
                      />
                    </div>
                  </div>
                  <div className="row pb-3">
                    <div className="col-md-12">
                      <textarea
                        className="form-control"
                        placeholder="Your Message"
                        rows="6"
                      ></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <input
                        type="submit"
                        className="btn btn-send"
                        value="Send Message"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
