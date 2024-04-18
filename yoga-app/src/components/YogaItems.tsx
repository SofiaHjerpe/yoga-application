import { useContext } from "react";
import { YogaContext } from "../context/YogaContextProvider";
import { YogaItem } from "./YogaItem";

export const YogaItems = () => {
  const { posesBefore, filteredPoses, searchVal, hideAllPoses, setHideAllPoses } =
    useContext(YogaContext);
  const filteredP = (
    <div className="outer">
      <div className="yoga-items">
        {filteredPoses.map((pose) => (
          <YogaItem pose={pose} key={pose.id} />
        ))}
      </div>
    </div>
  );
  setHideAllPoses(false);

  if (searchVal !== "") {
    return filteredP;
  } else if (searchVal === "") {
    return (
      <div className="yoga-items">
        {posesBefore.map((pose) => (
          <YogaItem pose={pose} key={pose.id} />
        ))}
      </div>
    );
  }
};
