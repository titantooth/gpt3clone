import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3-footer section-padding">
      <div className="gpt3-footer-heading">
        <h1 className="gradient-text">
          do you want to step into the future before others?
        </h1>
      </div>
      <div className="gpt3-footer-button">
        <p>request early access</p>
      </div>
      <div className="gpt3-footer-links">
        <div className="gpt3-footer-links-logo">
          <img src={gpt3Logo} alt="logo" />
          <p>ADDRESS goes here</p>
        </div>
        <div className="gpt3-footer-links-div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3-footer-links-div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3-footer-links-div">
          <h4>Get in Touch</h4>
          <p>ADDRESS</p>
          <p>PHONE NUM</p>
          <p>info@email.com</p>
        </div>
      </div>
      <div className="gpt3-footer-copyright">
        <p>2023 GPT-3 All rights reserved Ali Rabiee</p>
      </div>
    </div>
  );
};

export default Footer;
