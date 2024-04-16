import React, { useEffect, useState } from "react";
import { Categories } from "../components/Categories";

import { useParams } from "react-router-dom";
import { YogaItems } from "../components/YogaItems";
import { Search } from "../components/Search";

export const YogaItemsData = () => {
  const { id } = useParams();

  //  const fetchLevels = async (lvl: string) => {
  //   const response = await fetch(`${baseUrl}/poses?level=${lvl}`);
  //   const poses: ILevels = await response.json();
  //   const allPoses = poses.poses;
  //   setLevelsForPose(allPoses);
  // };
  // useEffect(() => {
  //   fetchLevels("");
  // }, [id]);

  

  // const fetchPoses = async () => {
  //   const response = await fetch(`${baseUrl}/poses`);
  //   const poses: IPoses[] = await response.json();

  //   setPoses(poses);
  // };
  // useEffect(() => {
  //   fetchPoses();
  // }, []);

  
  return (
    <div className="main-div">
      <Categories />
      <div className="main-container">
        <h1 className="heading">Welcome to this Yoga website!</h1>
        <Search />
        <YogaItems />
      </div>
    </div>
  );
};
