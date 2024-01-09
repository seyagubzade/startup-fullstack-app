import React from 'react';
import "./styles.scss"

const Services = () => {
  return (
    <div className="service_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div
              className="section_title text-center mb-70"
              style={{
                visibility: 'visible',
                animationDuration: '1s',
                animationDelay: '0.1s',
              }}
            >
              <span className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                Services
              </span>
              <h3
                className="wow fadeInUp"
                data-wow-duration="1.2s"
                data-wow-delay=".2s"
                style={{
                  visibility: 'visible',
                  animationDuration: '1.2s',
                  animationDelay: '0.2s',
                }}
              >
                With more than 20 years of experience we can deliver the best product design.
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-4">
            <div
              className="single_service text-center wow fadeInLeft"
              data-wow-duration="1.2s"
              data-wow-delay=".4s"
              style={{
                visibility: 'visible',
                animationDuration: '1.2s',
                animationDelay: '0.4s',
              }}
            >
              <div className="icon">
                <img src="https://preview.colorlib.com/theme/startup2/img/svg_icon/1.svg" alt="" />
              </div>
              <h3>Graphic design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-4">
            <div
              className="single_service text-center wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
              style={{
                visibility: 'visible',
                animationDuration: '1s',
                animationDelay: '0.3s',
              }}
            >
              <div className="icon">
                <img src="https://preview.colorlib.com/theme/startup2/img/svg_icon/2.svg" alt="" />
              </div>
              <h3>Web design</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-4">
            <div
              className="single_service text-center wow fadeInRight"
              data-wow-duration="1.2s"
              data-wow-delay=".4s"
              style={{
                visibility: 'visible',
                animationDuration: '1.2s',
                animationDelay: '0.4s',
              }}
            >
              <div className="icon">
                <img src="https://preview.colorlib.com/theme/startup2/img/svg_icon/3.svg" alt="" />
              </div>
              <h3>Mobile app</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
