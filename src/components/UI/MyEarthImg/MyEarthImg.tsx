import React from "react";
import earth from "../../../assets/earth.png";
import MyCircleAnimation from "../MyCircleAnimation/MyCircleAnimation";
import cl from "./MyEarthImg.module.scss";
// <img src={earth} alt="earth" />

const MyEarthImg = () => {
  return (
    <div>
      <div className={cl.outer}>
        <div className={cl.inner_1}></div>
        <div className="circle-animation">
          <MyCircleAnimation />
        </div>
        <div className={cl.inner_2}>
          <div className={cl.inner_3}>
            <div className={cl.inner_4}>
              <img src={earth} alt="earth" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEarthImg;
