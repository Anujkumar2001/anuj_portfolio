import React from "react";
import { IoClose } from "react-icons/io5";

function Contact({ setModalOpen }) {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: "30",
        top: "0%",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        overflowY: "scroll",
        paddingTop: "40px",
      }}
    >
      <span
        style={{
          color: "white",
          position: "absolute",
          top: "20px",
          right: "30px",
          fontSize: "30px",
          backgroundColor: "orange",
          borderRadius: "50%",
          padding: "10px",
          cursor: "pointer",
          zIndex: "40",
        }}
        onClick={() => {
          setModalOpen(false);
        }}
      >
        <IoClose />
      </span>
      <div
        className="contact-form-v1 "
        style={{
          backgroundColor: "#282b29",
          marginTop: "50px",
          width: "90%",
          margin: "auto",
          position: "relative",
        }}
      >
        <h3 className="fs-40 mb-30 mt-n2 text-white">Contact With Us</h3>
        <form
          action="mail.php"
          method="POST"
          className="contact-form ajax-contact"
        >
          <div className="row">
            <div className="form-group col-md-6 style-border">
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Write your name"
              />
            </div>
            <div className="form-group col-md-6 style-border">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group col-md-6 style-border">
              <input
                type="tel"
                className="form-control"
                name="number"
                id="number"
                placeholder="Phone Number"
              />
            </div>
            <div className="form-group col-md-6 style-border">
              <select name="subject" id="subject" className="form-select">
                <option value="" disabled selected hidden>
                  Select Service
                </option>
                <option value="Web Development">Web Development</option>
                <option value="Brand Marketing">Brand Marketing</option>
                <option value="UI/UX Designing">UI/UX Designing</option>
                <option value="Photography">Photography</option>
              </select>
            </div>
            <div className="form-group col-12 style-border">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="3"
                className="form-control"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div
              className="form-btn col-12"
              style={{
                backgroundColor: "orange",
                fontSize: "20px",
                color: "white",
                borderRadius: "10px",
              }}
            >
              <button className="th-btn w-100">Send Message</button>
            </div>
          </div>
          <p className="form-messages mb-0 mt-3"></p>
        </form>
      </div>
    </div>
  );
}

export default Contact;
