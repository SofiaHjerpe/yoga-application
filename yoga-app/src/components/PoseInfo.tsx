import React from "react";
import { IPoses } from "../interfaces";
import {InfoBoxItem} from "./InfoBoxItem";
import { Image } from "./ImageItem";

interface IPoseInfoProps {
  pose: IPoses;
}

export const PoseInfo = ({ pose }: IPoseInfoProps) => {
  return (
    <>
      <div className="poseInfo">
        <InfoBoxItem pose={pose} />
        <Image
          className="yoga-image pose"
          source="/src/assets/yoga-pose21.png"
          altAtr="yoga-pose"
        />
      </div>
    </>
  );
};
