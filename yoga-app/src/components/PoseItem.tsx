import React from "react";
import { IPoses } from "../interfaces";

interface IPoseItemProps {
  pose: IPoses;
}

const PoseItem = ({ pose }: IPoseItemProps) => {
  return (
    <div className="yoga-item big">
      <h1 className="heading green">{pose.english_name}</h1>
      <h4 className="pose-description">{pose.translation_name}</h4>
      <p className="pose-description">{pose.pose_description}</p>
      <strong className="pose-description">{pose.pose_benefits}</strong>
      <img src={pose.url_svg} width={400} alt="pose" />
    </div>
  );
};

export default PoseItem;
