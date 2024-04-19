import React from "react";
import { InfoBoxItem } from "../components/InfoBoxItem";
import { Image } from "../components/ImageItem";

export const About = () => {
  return (
    <div className="poseInfo">
      <InfoBoxItem />
      <Image
        className="yoga-image about-img"
        source="./src/assets/yoga-pose20.png"
        altAtr="yoga-pose2"
      />
    </div>
  );
};
