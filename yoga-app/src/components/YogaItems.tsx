import { useContext } from "react";
import { YogaContext } from "../context/YogaContextProvider";

export const YogaItems = () => {
  const { posesBefore, filteredPoses, searchVal } = useContext(YogaContext);

  if (searchVal !== "") {
    return filteredPoses.map((pose) => <p>{pose.english_name}</p>);
  } else {
    return posesBefore.map((pose) => <p>{pose.english_name}</p>);
  }
};
