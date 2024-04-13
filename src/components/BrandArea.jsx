import React, { useEffect } from "react";
import startIcon from "../img/shape/star-icon.svg";
import Marquee from "react-fast-marquee";

const BrandArea = () => {
  useEffect(() => {}, []);
  return (
    <div className="overflow-hidden">
      <div className="marquee-area-1">
        <div className="container-fluid">
          <div className="slider__marquee">
            <div className="marquee_mode marquee-wrap-1">
              <Marquee pauseOnHover>
                <h6 className="item marquee-item">
                  <a href="#">
                    <img src={startIcon} alt="img" />
                    1.5K Success Project
                  </a>
                </h6>
                <h6 className="item marquee-item">
                  <a href="#">
                    <img src={startIcon} alt="img" />
                    2.5+ Happy Clients
                  </a>
                </h6>

                <h6 className="item marquee-item">
                  <a href="#">
                    <img src={startIcon} alt="img" />
                    12+ Award win
                  </a>
                </h6>
                <h6 className="item marquee-item">
                  <a href="#">
                    <img src={startIcon} alt="img" />
                    10+ Countries Visited
                  </a>
                </h6>
                <h6 className="item marquee-item">
                  <a href="#">
                    <img src={startIcon} alt="img" />
                    Problem Solving
                  </a>
                </h6>

                <div className="item marquee-item">
                  <a href="#">
                    <img src={startIcon} alt="img" />
                    1.5K Success Project
                  </a>
                </div>
                <h6 className="item marquee-item">
                  <a href="#">
                    <img src={startIcon} alt="img" />
                    2.5+ Happy Clients
                  </a>
                </h6>
                <h6 className="item marquee-item">
                  <a href="#">
                    <img src={startIcon} alt="img" />
                    12+ Award win
                  </a>
                </h6>
                <h6 className="item marquee-item">
                  <a href="#">
                    <img src={startIcon} alt="img" />
                    10+ Countries Visited
                  </a>
                </h6>
                <h6 className="item marquee-item">
                  <a href="#">
                    <img src={startIcon} alt="img" />
                    Problem Solving
                  </a>
                </h6>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandArea;
