import React from "react";
import MyEarthImg from "../UI/MyEarthImg/MyEarthImg";
const TopContent = () => {
  return (
    <div className="top">
      <div className="left-content">
        <h1>{"Explore your own planet \nin our new metaverse"}</h1>
        <div className="earth-img-main">
          <MyEarthImg />
        </div>
        <div className="top-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="right-content">
        <h3>Roadmap stats</h3>
        <div className="stats-item">
          <span className="stats-item__amount">12345</span>
          <span className="stats-item__description">Lorem ipsum dolor</span>
          <hr />
        </div>

        <div className="stats-item">
          <span className="stats-item__amount">12345</span>
          <span className="stats-item__description">Lorem ipsum dolor</span>
          <hr />
        </div>

        <div className="stats-item">
          <span className="stats-item__amount">12345</span>
          <span className="stats-item__description">Lorem ipsum dolor</span>
        </div>
      </div>
    </div>
  );
};

export default TopContent;
