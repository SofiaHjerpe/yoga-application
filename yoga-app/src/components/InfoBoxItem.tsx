import React, { useContext } from "react";
import { IPoses } from "../interfaces";
import { YogaContext } from "../context/YogaContextProvider";

interface IPoseItemProps {
  pose?: IPoses;
}

export const InfoBoxItem = ({ pose }: IPoseItemProps) => {
  const { aboutItemData, isLoading } = useContext(YogaContext);
  if (pose) {
    return (
      <div className="yoga-item big">
        <span className={isLoading ? "loader" : undefined}></span>
        <h1 className="heading green">{pose?.english_name}</h1>
        <h4 className="pose-description">{pose?.translation_name}</h4>
        <p className="pose-description">{pose?.pose_description}</p>
        <strong className="pose-description">{pose?.pose_benefits}</strong>
        <img src={pose?.url_svg} width={400} alt="pose" />
      </div>
    );
  } else {
    return (
      <div className="yoga-item big">
        <h1 className="heading green">{aboutItemData[0].heading}</h1>
        <p className="pose-description about-d">{aboutItemData[0].description}</p>
      </div>
    );
  }
};
