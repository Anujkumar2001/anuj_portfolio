import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import PortfolioModal from "./PortfolioModal";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FaGithub } from "react-icons/fa";
import { MdOutlineDirectionsRun } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
const Portfolio = ({ userData }) => {
  const [modalOpen, setModdalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [projectData, setProjectData] = useState(userData.projects);
  const [inputVal, setInputVal] = useState("");
  const style = {
    position: "absolute",
    width: "100vw",
    top: "50%",
    height: "100vh",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "none",
    border: "none",
    outline: "none",
    boxShadow: 24,
    overflow: "hidden",
    overflowY: "scroll",
  };

  const handleProjects = (e) => {
    const techStackBag = [];
    setInputVal(e.target.value);
    const b = userData.projects.forEach((el) => {
      const c = el.techStack.some((tech) => {
        const inputVal = e.target.value.toLowerCase();
        if (tech.toLowerCase().includes(inputVal)) {
          techStackBag.push(el);
          return true;
          // console.log(el);
        }
      });
    });
    // console.log(b);
    setProjectData(techStackBag);
  };
  return (
    <>
      <section
        className="space"
        id="portfolio-sec"
        style={{ position: "relative" }}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4">
              <div className="title-area">
                <span className="sub-title">Projects</span>
                <h2 className="sec-title">I proud of the Same works</h2>
                {/* project search section ---------- */}
                <span
                  style={{
                    border: "1px solid black",
                    fontSize: "30px",
                    borderRadius: "50px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingRight: "10px",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Search project with techstack"
                    style={{
                      outline: "none",
                      border: "none",
                      backgroundColor: "transparent",
                    }}
                    onChange={(e) => {
                      handleProjects(e);
                    }}
                    value={inputVal}
                  />
                  <IoMdSearch />
                </span>
              </div>
            </div>
            <div className="col-auto align-self-end">
              <div className="sec-btn">
                <a className="th-btn style-border2 link-anim">
                  <span className="text-anime">
                    <span className="text">SEE ALL PROJECTS</span>
                  </span>
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>

          <div className="portfolio-list-wrap">
            {projectData?.slice(0, 4)?.map((el, index) => {
              return (
                <div className="portfolio-list" key={index}>
                  <div className="portfolio-card">
                    <div
                      className="portfolio-img img-shine"
                      data-bs-toggle="modal"
                      data-bs-target="#portfolioModal"
                    >
                      {el.videoUrl.url !== "" ? (
                        <video controls className="rounded-md">
                          <source src={el.videoUrl.url} type="video/mp4" />
                          Your browser does not support HTML video.
                        </video>
                      ) : (
                        <img src={el.image.url} />
                      )}
                    </div>
                    <div className="portfolio-content">
                      <a
                        href="#portfolioModal"
                        data-bs-toggle="modal"
                        data-bs-target="#portfolioModal"
                        className="icon-btn text-center"
                        onClick={(e) => {
                          setModdalOpen(true);
                          setModalData(el);
                        }}
                      >
                        <FaArrowRight />
                      </a>
                      <div className="portfolio-details">
                        <h3 className="portfolio-title">
                          <a
                            href="#portfolioModal"
                            data-bs-toggle="modal"
                            data-bs-target="#portfolioModal"
                          >
                            {el.title}
                          </a>
                          <p
                            className="portfolio-subtitle"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "start",
                              flexWrap: "wrap",
                              marginTop: "10px",
                            }}
                          >
                            techStack:
                            <ul
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                width: "100%",
                                listStyle: "none",
                                gap: "5px",
                                paddingLeft: "0",
                              }}
                            >
                              {el.techStack.map((tech, index) => (
                                <li key={index}>{tech},</li>
                              ))}
                            </ul>
                          </p>

                          <div
                            style={{
                              display: "flex",
                              gap: "40px",
                            }}
                          >
                            <span
                              style={{
                                border: "2px solid black",
                                padding: "10px",
                                borderRadius: "10px",
                                fontSize: "17px",
                                cursor: "pointer",
                              }}
                            >
                              <a href={el.githuburl} target="_blank">
                                {<FaGithub />} Github
                              </a>
                            </span>
                            <span
                              style={{
                                border: "2px solid black",
                                padding: "10px",
                                borderRadius: "10px",
                                fontSize: "17px",
                                cursor: "pointer",
                              }}
                            >
                              <a href={el.liveurl} target="_blank">
                                {<MdOutlineDirectionsRun />}
                                Deploy
                              </a>{" "}
                            </span>
                          </div>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Modal
        open={modalOpen}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modalBox">
          <PortfolioModal setModdalOpen={setModdalOpen} modalData={modalData} />
        </Box>
      </Modal>
    </>
  );
};

export default Portfolio;
