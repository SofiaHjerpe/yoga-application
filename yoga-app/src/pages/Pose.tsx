import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ILevels, IPoses } from "../interfaces";
import { PoseInfo } from "../components/PoseInfo";

export const Pose = () => {
  const [poseBefore, setPose] = useState<IPoses>(Object);
  
  const { id } = useParams(); 
  const baseUrl = "https://yoga-api-nzy4.onrender.com/v1";
  const fetchPose = async () => {
    const response = await fetch(`${baseUrl}/poses?id=${id}`);
    const pose: IPoses = await response.json();

    setPose(pose);
  };
  useEffect(() => {
    fetchPose();
  }, []);

   
  return <>
    <PoseInfo  pose={poseBefore} />
  
  </>;
};

