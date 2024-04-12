import React from "react";
import { IPoses } from "../interfaces";
interface IPoseInfoProps {
  pose: IPoses;
}

export const PoseInfo = ({ pose }: IPoseInfoProps) => {
    
  return (
    <>
      
      <h1 className="heading">{pose.english_name}</h1>
      <h4 className="translation">{pose.translation_name}</h4>
      <p className="pose-description">{pose.pose_description}</p>
      <strong>{pose.pose_benefits}</strong>
      <img src={pose.url_svg} width={400} alt="pose" />
    </>
  );
};
