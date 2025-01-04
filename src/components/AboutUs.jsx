import React, { useEffect, useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import skillsData from "../data/skills.json";
import { getSkillsData } from "../utility/getSkillsData";

const AboutUs = ({ userData }) => {
  const [showCart3, setShowCart3] = useState(true);
  const [isClick3, setIsClick3] = useState("active");
  const [count, setCount] = useState(0);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [skills, setSkills] = useState([]);
  const count1 = (val) => {
    let interval = setInterval(() => {
      val++;
      setCount(val);
      if (val === 6) {
        clearInterval(interval);
      }
    }, 200);
  };

  useEffect(() => {
    count1(0);
  }, []);
  useEffect(() => {
    let category = skillsData.skills[categoryIndex].category;
    const data = getSkillsData({ category });
    setSkills(data[0]);
  }, [categoryIndex]);
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
                  }}
                  src={userData.about.avatar.url}
                  alt="images"
                />
              </div>
              <div className="year-counter jump">
                <div className="year-counter_number">
                  <span className="counter-number flex items-end justify-center">
                    {count} <p className="text-xl text-white">mo</p>{" "}
                  </span>
                </div>
                <div className="flex flex-col  items-center justify-center  ">
                  <p className=" text-2xl  mb-1  text-themeColor ">Intern</p>
                  <span className="w-full h-[1px] bg-themeColor "></span>
                  <p className="text-gray-600 mb-0 ">24-bytes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="title-area mb-25">
              <span className="sub-title">About Us</span>
              <h2 className="sec-title">{userData.about.quote}</h2>
            </div>
            <div className="about-tab-1">
              {/* {-----------/* main skills selections --------------------------- */}{" "}
              {/* <div className="flex  justify-center">
                <div className=" border-1 border-gray-500 flex items-center justify-center  w-[8%] h-14 py-2 ">
                  <FcPrevious />
                </div>
                <h3 className="bg-[#ff9301] text-white text-center py-2 h-14  w-[80%]">
                  Technical Skills
                </h3>
                <div className=" border-1 border-gray-500 flex items-center justify-center  w-[8%] h-14 py-2 ">
                  <FcNext />
                </div>
              </div> */}
              <div className="flex items-center justify-center bg-gray-100">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  onClick={() =>
                    setCategoryIndex((pre) => (pre !== 0 ? pre - 1 : pre))
                  }
                  // disabled={currentIndex === 0}
                >
                  {categoryIndex !== 0
                    ? skillsData.skills[categoryIndex - 1].category
                    : skillsData.skills[categoryIndex].category}
                </button>
                <div className="mx-4  border border-gray-300 rounded bg-white min-w-[200px] text-center">
                  <p className="text-center mb-0 ">
                    {skillsData.skills[categoryIndex].category}
                  </p>
                </div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  onClick={() =>
                    setCategoryIndex((pre) =>
                      pre !== skillsData.skills.length - 1 ? pre + 1 : pre
                    )
                  }
                  // disabled={currentIndex === contentArray.length - 1}
                >
                  {skillsData.skills[categoryIndex + 1].category
                    ? skillsData.skills[categoryIndex + 1].category
                    : skillsData.skills[categoryIndex].category}
                </button>
              </div>
              <div className="filter-menu-active">
                {/* <button
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
                    <span className="text">Framework Tools</span>
                  </span>
                </button>
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
                    <span className="text">frontend</span>
                  </span>
                </button>
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
                    <span className="text">API Integration</span>
                  </span>
                </button>
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
                  className={`${isClick3} th-btn `}
                >
                  <span className="text-anime">
                    <span className="text">Testing & Debugging</span>
                  </span>
                </button> */}
              </div>
              <div className="filter-active-cat1">
                {showCart3 && (
                  <div className="filter-item cat3">
                    <div className="about-tab-wrap">
                      {skills.items?.map((el, index) => (
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
                            {el.title}
                          </span>
                          <h4
                            className="about-tab-card-title"
                            style={{
                              width: "50px",
                              height: "50px",
                              overflow: "hidden",
                            }}
                          >
                            <img src={el.image} alt="" />
                          </h4>
                          <p className="about-tab-card-text">{el.name}</p>{" "}
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
