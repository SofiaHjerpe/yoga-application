import React, { useContext } from "react";
import { YogaContext } from "../context/YogaContextProvider";

interface ILevelProps {
  level: any;
}
export const Level = ({ level }: ILevelProps) => {
  const { checkmarkLvl,setCheckmarkLvl, fetchBeginnerPoses, fetchIntermediatePoses } = useContext(YogaContext);

  const handleOnClick = (name: string) => {
    switch (name) {
      case "beginner":
        fetchBeginnerPoses();
        break;
      case "intermediate":
        fetchIntermediatePoses();
        break;
    }
    setCheckmarkLvl(name)
  };

    const styleNoCheck = { display: "none" };
    const styleOnCheck = { display: "block" };

  return (
    <>
      <div className="category-container">
        <h2 onClick={() => handleOnClick(level.level)} className="category">
          {level.level}
        </h2>
        <span
          style={checkmarkLvl === level.level ? styleOnCheck : styleNoCheck}
          className="material-symbols-outlined"
        >
          check_small
        </span>
      </div>
    </>
  );
};
