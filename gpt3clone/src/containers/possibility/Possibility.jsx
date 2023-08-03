import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3-possibility section-padding" id="possibility">
      <div className="gpt3-possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3-possibility-content">
        <h4>Request early access to get started</h4>
        <h1 className="gradient-text">
          the possibilities are beyond our imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iusto
          totam, ad molestias nulla excepturi incidunt hic fugit delectus!
          Repellendus a quae dolor architecto soluta earum iure beatae quia
          delectus?
        </p>
        <h4>Request early access to get started</h4>
      </div>
    </div>
  );
};

export default Possibility;
