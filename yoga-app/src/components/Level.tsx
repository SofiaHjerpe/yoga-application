import React, { useContext } from "react";
import { YogaContext } from "../context/YogaContextProvider";

interface ILevelProps {
  level: any;
}
export const Level = ({ level }: ILevelProps) => {
  const { checkmarkLvl, setCheckmarkLvl, fetchBeginnerPoses, fetchIntermediatePoses } =
    useContext(YogaContext);

  const handleOnClick = (name: string) => {
    switch (name) {
      case "beginner":
        fetchBeginnerPoses();
        break;
      case "intermediate":
        fetchIntermediatePoses();
        break;
    }
    setCheckmarkLvl(name);
  };

  const styleNoCheck = { display: "none" };
  const styleOnCheck = { display: "block" };

  return (
    <>
      <div className="category-container">
        <h2 onClick={() => handleOnClick(level.name)} className="category">
          {level.name}
        </h2>
        {/* checkmark shows if name is correct */}
        <span
          style={checkmarkLvl === level.name ? styleOnCheck : styleNoCheck}
          className="material-symbols-outlined"
        >
          check_small
        </span>
      </div>
    </>
  );
};
