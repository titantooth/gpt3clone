import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3-header section-padding" id="home">
      <div className="gpt3-header-content">
        <h1 className="gradient-text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          odio quas inventore sapiente delectus minima reprehenderit quo et
          fugit aspernatur ea iste totam, non impedit velit est, voluptates unde
          at.
        </p>
        <div className="gpt3-header-content-input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started!</button>
        </div>
        <div className="gpt3-header-content-people">
          <img src={people} alt="people use this" />
          <p>1600 people requested access a visit in the last 24 hours</p>
        </div>
        <div className="gpt3-header-image">
          {/* <img src={ai} alt="ai" /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
