import React from "react";
import planet from "../../../assets/planet.png";
import MyCircleAnimation from "../MyCircleAnimation/MyCircleAnimation";
import cl from "./MyPlanetImg.module.scss";
const MyPlanetImg = () => {
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
              <img src={planet} alt="planet" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlanetImg;
