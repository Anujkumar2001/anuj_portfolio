import React, { useEffect, useState } from "react";
import quote from "../img/icon/quote.svg";
const TestimonialSection = ({ userData }) => {
  let arr = [];
  arr.push(userData.testimonials[0]);

  const [testimonialData, setTestimonialData] = useState(arr);
  const [activeButton, setActiveButton] = useState(0);

  const handleReviewClick = (i) => {
    let arr = [];
    arr.push(userData.testimonials[i]);
    setTestimonialData(arr);
    setActiveButton(i);
  };

  return (
    <section className="testi-sec-1 overflow-hidden space-bottom">
      <div className="container">
        <div className="title-area">
          <span className="sub-title">Testimonial</span>
          <h2 className="sec-title">What Clients Say About Us</h2>
        </div>
        <div className="row flex-row-reverse gy-4">
          <div className="col-xl-6">
            <div className="swiper testi-thumb-slider1">
              <div className="swiper-wrapper">
                {testimonialData?.map((el, index) => {
                  return (
                    <div
                      key={index}
                      className="testi-profile_thumb swiper-slide"
                    >
                      <div className="testi-profile-bg icon-masking">
                        <span
                          data-mask-src="assets/img/testimonial/testi_thumb_bg1_1.png"
                          className="mask-icon"
                        ></span>
                        <img src={el.image.url} alt="img" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="swiper testi-slider1">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  {testimonialData?.map((el, index) => {
                    return (
                      <div key={index} className="testi-card">
                        <div className="quote-icon icon-masking">
                          <span
                            data-mask-src={quote}
                            className="mask-icon"
                          ></span>
                          <img src={quote} alt="icon" />
                        </div>
                        <h3 className="testi-card_title">Customer Reviews</h3>
                        <p className="testi-card_text">{el.review}</p>
                        <div className="testi-card_profile">
                          <h3 className="testi-card_name">{el.name}</h3>
                          <span className="testi-card_desig">
                            {el.position}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* click review button --------- */}
            <div style={{ display: "flex", gap: "10px" }}>
              {userData?.testimonials.map((el, index) => {
                return (
                  <div className="testi-thumb-wrap" key={index}>
                    <div
                      className="testi-thumb"
                      data-slider-tab=".testi-slider1"
                    >
                      <div
                        className="tab-btn active"
                        onClick={() => {
                          handleReviewClick(index);
                        }}
                      >
                        <img
                          src={el.image.url}
                          alt="Image"
                          style={{
                            opacity: activeButton === index ? "1" : "0.5",
                            border: "1px solid black",
                            margin: "5px",
                            cursor: "pointer",
                            width: "50px",
                            height: "50px",
                            transition: "0.7s",
                          }}
                        ></img>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
