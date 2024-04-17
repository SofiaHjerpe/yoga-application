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

  

  return (
    <div className="main-div">
      <div className="categoriesAndImg">
        <Categories />
        <img className="yoga-image" src="./src/assets/yoga-pose25.png" alt="yoga-pose" />
      </div>

      <div className="main-container">
        <h1 className="heading">Welcome to this Yoga website!</h1>
        <div className="searchAndImg">
          <Search />
          <img className="yoga-image" src="./src/assets/meditation2.png" alt="meditation" />
        </div>
        <YogaItems />
      </div>
    </div>
  );
};
