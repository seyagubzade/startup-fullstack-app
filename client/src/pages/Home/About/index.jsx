import React from 'react';
import "./styles.scss";

const About = () => {
  return (
    <div className="about_area">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-5 offset-lg-1">
            <div className="about_info">
              <div className="section_title white_text">
                <span
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                  style={{
                    visibility: 'visible',
                    animationDuration: '1s',
                    animationDelay: '0.3s',
                  }}
                >
                  About Us
                </span>
                <h3
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".4s"
                  style={{
                    visibility: 'visible',
                    animationDuration: '1s',
                    animationDelay: '0.4s',
                  }}
                >
                  Empowering individuals
                </h3>
                <p
                  className="mid_text wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".5s"
                  style={{
                    visibility: 'visible',
                    animationDuration: '1s',
                    animationDelay: '0.5s',
                  }}
                >
                  Efficiently unleash cross-media tour function information without cross-action media value. Quickly maximize timely deliverables for real-time schemas.
                </p>
                <p
                  className="last_text wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".6s"
                  style={{
                    visibility: 'visible',
                    animationDuration: '1s',
                    animationDelay: '0.6s',
                  }}
                >
                  “Function information without cross-action media value.”
                </p>
                <a
                  href="#"
                  className="boxed-btn3 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".7s"
                  style={{
                    visibility: 'visible',
                    animationDuration: '1s',
                    animationDelay: '0.7s',
                  }}
                >
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
