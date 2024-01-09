import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-3">
              <div
                className="footer_logo wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.3s",
                }}
              >
                <a href="index.html">
                  <img
                    src="https://preview.colorlib.com/theme/startup2/img/logo.png.webp"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-9">
              <div className="menu_links d-flex align-items-center">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/add">Add New</Link>
                  </li>
                  <li>
                    <Link to="#">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="#">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-12">
              <div className="social_links">
                <ul>
                  <li>
                    <a
                      className="wow fadeInUp"
                    >
                      <i className="fa fa-facebook"></i>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="wow fadeInUp"
                    >
                      <i className="fa fa-twitter"></i>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="wow fadeInUp"
                    >
                      <i className="fa fa-instagram"></i>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="wow fadeInUp"
                    >
                      <i className="fa fa-google-plus"></i>{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right_text">
        <div className="container">
          <div className="footer_border"></div>
          <div className="row">
            <div className="col-xl-12">
              <p
                className="copy_right text-center wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="1.3s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "1.3s",
                }}
              >
                Copyright ©
                <script>document.write(new Date().getFullYear());</script>
                2024 All rights reserved | This template is made with{" "}
                <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
