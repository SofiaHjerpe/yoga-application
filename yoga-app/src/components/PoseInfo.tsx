import React from "react";
import { IPoses } from "../interfaces";
import { Levels } from "./Levels";
interface IPoseInfoProps {
  pose: IPoses;
}

export const PoseInfo = ({ pose }: IPoseInfoProps) => {
  return (
    <>
      <div className="poseInfo">
        <div className="yoga-item big">
          <h1 className="heading green">{pose.english_name}</h1>
          <h4 className="pose-description">{pose.translation_name}</h4>
          <p className="pose-description">{pose.pose_description}</p>
          <strong className="pose-description">{pose.pose_benefits}</strong>
          <img src={pose.url_svg} width={400} alt="pose" />
        </div>
        <img className="yoga-image pose" src="/src/assets/yoga-pose21.png" alt="yoga-pose" />
      </div>
    </>
  );
};
