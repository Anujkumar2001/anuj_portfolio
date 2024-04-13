import React, { useState, useEffect } from "react";
import logo from "../img/logo.svg";
import { IoIosClose } from "react-icons/io";
import { IoReorderThree } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import { RiSubtractFill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa6";
import SmoothScroll from "smooth-scroll";
import "../style/mobileNav.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Contact from "./Contact";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggleNav, setToogleNav] = useState(false);
  const [toogleHome, setToogleHome] = useState(false);
  const [toogleBlog, setToogleBlog] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Check if user has scrolled down more than 100px
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 300, // Control the scrolling speed (optional)
      easing: "easeInOutQuad", // Control the easing function (optional)
    });

    // Cleanup function
    return () => {
      scroll.destroy();
    };
  }, []);

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
  return (
    <>
      <Modal
        open={modalOpen}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modalBox">
          {<Contact setModalOpen={setModalOpen} />}
        </Box>
      </Modal>
      {toggleNav ? (
        <div
          className="onepage-nav"
          style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backgroundBlendMode: "color-burn",
            position: "fixed",
            transition: "0.7s",
            zIndex: "30",
          }}
        >
          <div
            className="th-menu-area text-center"
            style={{
              width: "300px", // Adjusted width to 100%
              minWidth: "30%",
              height: "100vh",
              position: "fixed",
              zIndex: "4",
              backgroundColor: "white",
              transition: "0.7s",
            }}
          >
            <button
              className="th-menu-toggle"
              style={{
                fontSize: "30px",
                position: "absolute",
                right: "-20px",
                top: "30px",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
              }}
              onClick={() => {
                setToogleNav(false);
              }}
            >
              <IoIosClose />
            </button>
            <div
              className="mobile-logo"
              style={{ backgroundColor: "black", padding: "30px 0" }}
            >
              <a className="icon-masking" href="index.html">
                <span
                  data-mask-src="assets/img/logo.svg"
                  className="mask-icon"
                ></span>
                {/* <img src={logo} alt="Haona" />{" "} */}
                {/* Assuming 'logo' is imported */}
              </a>
            </div>
            <div className="th-mobile-menu" style={{ overflow: "hidden" }}>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                }}
              >
                <li className="menu-item-has-children">
                  <div className="link-anim">
                    <span
                      className="text-anime"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setToogleHome(!toogleHome);
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          width: "100%",
                          justifyContent: "space-between",

                          marginBottom: "20px",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            gap: "10px",
                          }}
                        >
                          {" "}
                          {!toogleHome ? <FaGreaterThan /> : <FaChevronDown />}
                          <span className="text">HOME</span>
                        </span>
                      </span>
                    </span>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <div className="link-anim">
                    <a href="#about-sec" style={{ paddingLeft: "0" }}>
                      <div className="menu-item-has-children">
                        <span className="text-anime">
                          <span
                            style={{
                              display: "flex",
                              width: "100%",
                              alignItems: "center",
                              gap: "10px",
                              cursor: "pointer",
                            }}
                          >
                            <FaGreaterThan />
                            <span className="text">ABOUT</span>
                          </span>
                        </span>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <a href="#portfolio-sec" style={{ paddingLeft: "0" }}>
                    <div className="link-anim">
                      <span
                        className=""
                        style={{
                          display: "flex",
                          gap: "10px",
                        }}
                      >
                        <FaGreaterThan />
                        <span className="text">PROJECTS</span>
                      </span>
                    </div>
                  </a>
                </li>
                <li className="menu-item-has-children">
                  <div className="link-anim">
                    <span
                      className="text-anime"
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                        }}
                      >
                        <FaGreaterThan />
                        <a href="#footer" style={{ paddingLeft: "0" }}>
                          FOOTER
                        </a>
                      </span>
                    </span>
                  </div>
                </li>
                <li>
                  <a
                    href="#contactModal"
                    data-bs-toggle="modal"
                    data-bs-target="#contactModal"
                    style={{ paddingLeft: "0" }}
                  >
                    <div className="link-anim">
                      <span
                        className="text-anime"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                        onClick={() => {
                          setModalOpen(true);
                        }}
                      >
                        <FaGreaterThan />
                        <span className="text">CONTACT</span>
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}{" "}
      {/* navbar start from here8  */}
      <header
        className={`th-header header-layout1  onepage-nav ${
          isScrolled ? "scrolled" : ""
        }`}
        style={{ position: "fixed", zIndex: "4" }}
      >
        <div className="sticky-wrapper">
          <div className="sticky-active">
            {/* Main Menu Area */}
            <div className="menu-area">
              <div className="container">
                <div className="row align-items-center justify-content-between">
                  <div className="col-auto">
                    <div className="header-logo">
                      <a className="icon-masking" href="index.html">
                        {/* <span data-mask-src={logo} className="mask-icon"></span> */}
                        {/* <img src={logo} alt="Haona" /> */}
                      </a>
                    </div>
                  </div>
                  <div className="col-auto">
                    <nav className="main-menu d-none d-lg-inline-block">
                      <ul>
                        <li className="menu-item-has-children">
                          <a href="#hero">
                            <div className="link-anim">
                              <span className="text-anime">
                                <span className="text">HOME</span>
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#about-sec">
                            <div className="link-anim">
                              <span className="text-anime">
                                <span className="text">ABOUT</span>
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#portfolio-sec">
                            <div className="link-anim">
                              <span className="text-anime">
                                <span className="text">PROJECTS</span>
                              </span>
                            </div>
                          </a>
                        </li>

                        <li
                          onClick={() => {
                            setModalOpen(true);
                          }}
                        >
                          <a
                            href="#contactModal"
                            data-bs-toggle="modal"
                            data-bs-target="#contactModal"
                          >
                            <div className="link-anim">
                              <span className="text-anime">
                                <span className="text">CONTACT</span>
                              </span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#footer">
                            <div className="link-anim">
                              <span className="text-anime">
                                <span className="text">FOOTER</span>
                              </span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <div className="header-button d-flex d-lg-none">
                      <button
                        type="button"
                        className="th-menu-toggle"
                        onClick={() => {
                          setToogleNav(true);
                        }}
                      >
                        <IoReorderThree />
                      </button>
                    </div>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <div className="header-button">
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#contactModal"
                        className="th-btn style-border link-anim"
                        href="https://www.canva.com/design/DAF9PpxnxHs/0di57MS7juVKRSbD8MWLzw/view?utm_content=DAF9PpxnxHs&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                        target="_blank"
                      >
                        <span className="text-anime">
                          <a className="text">Get CV</a>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
