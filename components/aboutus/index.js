import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div className="about-us-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 no-gutters no-padding">
              <div className="img-left">
                <img src="/images/aboutoverlay.jpg" alt="company features" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sub-section-title about-feature-wrapper">
                <h2>Our Best Features In IT Companies</h2>
                <div className="features-lists">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="single-feature">
                        <div className="feature-icon">
                          <h5>🤑</h5>
                        </div>
                        <div className="feature-description">
                          <h3>Digital Marketing</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Porro cum rerum alias deserunt!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-feature">
                        <div className="feature-icon">
                          <h5>💩</h5>
                        </div>
                        <div className="feature-description">
                          <h3>Digital Marketing</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Porro cum rerum alias deserunt!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-feature">
                        <div className="feature-icon">
                          <h5>🍹</h5>
                        </div>
                        <div className="feature-description">
                          <h3>Digital Marketing</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Porro cum rerum alias deserunt!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-feature">
                        <div className="feature-icon">
                          <h5>☠️</h5>
                        </div>
                        <div className="feature-description">
                          <h3>Digital Marketing</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Porro cum rerum alias deserunt!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
