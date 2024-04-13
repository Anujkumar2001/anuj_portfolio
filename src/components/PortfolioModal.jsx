import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function PortfolioModal({ setModdalOpen, modalData }) {
  return (
    <>
      {/* <h1>hello</h1> */}
      <div className="" id="portfolioModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="container">
              <button
                type="button"
                className="icon-btn btn-close"
                onClick={() => {
                  setModdalOpen(false);
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <div className="page-single bg-title">
                <div className="page-img mb-30">
                  <img
                    className="w-100"
                    src={modalData.image.url}
                    alt="portfolio Image"
                  />
                </div>
                <div className="page-content">
                  <h2 className="h3 page-title text-white">
                    {modalData.title}
                  </h2>
                  <div className="row gy-30">
                    <div className="col-xl-7">
                      <p className="mb-20 text-light">
                        {modalData.description}
                      </p>
                      {/* tech stack -- */}

                      <div style={{ display: "flex", gap: "10px" }}>
                        <h1 style={{ color: "white", fontSize: "20px" }}>
                          Tech Stack :-
                        </h1>
                        {modalData.techStack.map((el) => {
                          return <h2 style={{ color: "white" }}>{el},</h2>;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioModal;
