import React from "react";
import processicon1 from "../img/icon/process-icon1-1.svg";
import processicon2 from "../img/icon/process-icon1-2.svg";
import processicon3 from "../img/icon/process-icon1-3.svg";
import process from "../img/shape/process-bg-shape1.png";
const WorkProcess = () => {
  return (
    <section className="space-bottom">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Time line</span>
          <h2 className="sec-title">Standard Working Process</h2>
        </div>
        <div className="process-wrap-1 " data-bg-src={process}>
          <img
            src={process}
            alt=""
            style={{ position: "absolute", width: "80%" }}
            className="process_img"
          />
          <div className="row gy-4 gy-xl-0 justify-content-lg-between justify-content-center">
            <div className="col-xl-auto col-lg-4 col-md-6">
              <div className="process-card">
                <div className="box-content">
                  <div className="box-icon">
                    <img src={processicon1} alt="icon" />
                  </div>
                  <h3 className="box-title">Knowledge</h3>
                  <p className="box-text">
                    Continuous learning, mastering diverse technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-auto col-lg-4 col-md-6">
              <div className="process-card">
                <div className="box-content">
                  <div className="box-icon">
                    <img src={processicon2} alt="icon" />
                  </div>
                  <h3 className="box-title">Working</h3>
                  <p className="box-text">
                    Practical expertise, efficient collaboration, timely project
                    delivery.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-auto col-lg-4 col-md-6">
              <div className="process-card">
                <div className="box-content">
                  <div className="box-icon">
                    <img src={processicon3} alt="icon" />
                  </div>
                  <h3 className="box-title">Solution</h3>
                  <p className="box-text">
                    Problem-solving prowess, real-world projects, impactful
                    outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
