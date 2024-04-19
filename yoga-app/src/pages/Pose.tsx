import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPoses } from "../interfaces";
import { PoseInfo } from "../components/PoseInfo";
import { YogaContext } from "../context/YogaContextProvider";

export const Pose = () => {
  const { poseBefore, setPose, baseUrl } = useContext(YogaContext);
  const { id } = useParams();

  const fetchPose = async () => {
    const response = await fetch(`${baseUrl}/poses?id=${id}`);
    const pose: IPoses = await response.json();

    setPose(pose);
  };
  useEffect(() => {
    fetchPose();
  }, []);

  return (
    <>
      <PoseInfo pose={poseBefore} />
    </>
  );
};
