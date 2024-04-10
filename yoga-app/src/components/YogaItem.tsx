import React from "react";
import { IPoses } from "../interfaces";
interface IYogaItemProps {
  pose: IPoses;
}

export const YogaItem = ({ pose }: IYogaItemProps) => {
  return (
    <div className="yoga-item">
      <h2 className="pose-name">{pose.english_name}</h2>
     
        <p className="text">{pose.pose_description}</p>
       
    </div>
  );
};
