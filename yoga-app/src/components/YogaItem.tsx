import React from "react";
import { IPoses } from "../interfaces";
interface IYogaItemProps {
  pose: IPoses;
}

export const YogaItem = ({ pose }: IYogaItemProps) => {
  return (
    <>
      <h2>{pose.english_name}</h2>
      <p>{pose.pose_description}</p>
    </>
  );
};
