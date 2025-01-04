/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import "../style/swiper.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper/modules";
const Client = ({ userData }) => {
  return (
    <div className="client-area-1 bg-title space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="title-area text-center">
              <span className="sub-title">Development</span>
              <h2 className="sec-title text-white">I use tools</h2>
            </div>
          </div>
        </div>
        <div class="row gy-4 justify-content-center">
          {userData.tools.map((el, index) => {
            return (
              <div
                className="col-lg-3 col-md-4 col-sm-6"
                style={{ cursor: "pointer" }}
              >
                <a className="client-card  w-full flex items-center justify-center">
                  <img
                    src={el.image.url}
                    alt="Image"
                    width={"150px"}
                    // height={"300px"}
                  />
                  <h6 className="client-card-title">{el.name}</h6>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Client;
