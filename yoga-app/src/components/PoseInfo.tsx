import React from "react";
import { IPoses } from "../interfaces";
import PoseItem from "./PoseItem";

interface IPoseInfoProps {
  pose: IPoses;
}

export const PoseInfo = ({ pose }: IPoseInfoProps) => {
  return (
    <>
      <div className="poseInfo">
        <PoseItem pose={pose} />

        <img className="yoga-image pose" src="/src/assets/yoga-pose21.png" alt="yoga-pose" />
      </div>
    </>
  );
};
