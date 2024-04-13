import React, { useEffect, useState } from "react";
import { useCountUp } from "react-use-count-up";

const AboutUs = ({ userData }) => {
  const [showCart3, setShowCart3] = useState(true);
  const [isClick3, setIsClick3] = useState("active");
  const [count, setCount] = useState(0);

  const count1 = (val) => {
    if (userData.about.exp_year == 0) {
      setCount(0);
    } else {
      let interval = setInterval(() => {
        val++;
        setCount(val);
        if (val == userData.about.exp_year) {
          clearInterval(interval);
        }
      }, 200);
    }
  };

  useEffect(() => {
    count1(0);
  }, []);
  // console.log(userData, "about us");
  return (
    <div className="overflow-hidden space" id="about-sec">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 mb-50 mb-xl-0">
            <div className="img-box1">
              <div
                className="img1"
                style={{
                  height: "613px",
                  maxWidth: "386px",
                }}
              >
                <img
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  src={userData.about.avatar.url}
                  alt="image"
                />
              </div>
              <div className="year-counter jump">
                <div className="year-counter_number">
                  <span className="counter-number">{count}</span>
                </div>
                <p className="year-counter_text">Frasher</p>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="title-area mb-25">
              <span className="sub-title">About Us</span>
              <h2 className="sec-title">{userData.about.quote}</h2>
            </div>
            <div className="about-tab-1">
              <div className="filter-menu-active">
                <button
                  // style={showCart3 ? { border: "2px solid black" } : ""}
                  style={
                    !showCart3
                      ? { border: "2px solid black" }
                      : { border: "none" }
                  }
                  type="button"
                  onClick={() => {
                    setShowCart3(!showCart3);
                    setIsClick3(showCart3 !== true ? "active" : " ");
                  }}
                  className={`${isClick3} th-btn link-anim`}
                >
                  <span className="text-anime">
                    <span className="text">Skills</span>
                  </span>
                </button>
              </div>
              <div className="filter-active-cat1">
                {showCart3 && (
                  <div className="filter-item cat3">
                    <div className="about-tab-wrap">
                      {userData.skills.map((el, index) => (
                        <div
                          className="about-tab-card"
                          key={index}
                          style={{
                            minWidth: "200px",
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <span className="about-tab-card-subtitle">
                            {el.name}
                          </span>
                          <h4
                            className="about-tab-card-title"
                            style={{
                              width: "50px",
                              height: "50px",
                              overflow: "hidden",
                            }}
                          >
                            <img src={el.image.url} alt="" />
                          </h4>
                          <p className="about-tab-card-text">{el.name}</p>{" "}
                          {/* Not sure what data you want to display here */}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
