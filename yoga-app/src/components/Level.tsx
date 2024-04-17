import React, { useContext } from "react";
import { YogaContext } from "../context/YogaContextProvider";

interface ILevelProps {
  level: any;
}
export const Level = ({ level }: ILevelProps) => {
  const { fetchBeginnerPoses, fetchIntermediatePoses } = useContext(YogaContext);

  const handleOnClick = (name: string) => {
    switch (name) {
      case "beginner":
        fetchBeginnerPoses();
        break;
      case "intermediate":
        fetchIntermediatePoses();
        break;
    }
  };

  return (
    <>
      <div className="category-container">
        <h2 onClick={() => handleOnClick(level.level)} className="category">
          {level.level}
        </h2>
      </div>
    </>
  );
};
