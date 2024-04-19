import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPoses } from "../interfaces";
import { PoseInfo } from "../components/PoseInfo";
import { YogaContext } from "../context/YogaContextProvider";

export const Pose = () => {
  const { poseBefore, setPose, baseUrl, showLoader, hideLoader } = useContext(YogaContext);
  const { id } = useParams();

  const fetchPose = async () => {
    showLoader();
    try {
      const response = await fetch(`${baseUrl}/poses?id=${id}`);
      const pose: IPoses = await response.json();

      setPose(pose);
    } catch {
      (error: any) => console.error("Error:", error);
    } finally {
      hideLoader();
    }
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
