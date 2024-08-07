import { useContext } from "react";
import { YogaContext } from "../context/YogaContextProvider";
import { YogaItem } from "./YogaItem";

export const YogaItems = () => {
  // search, work on later!!
  const { posesBefore, filteredPoses } = useContext(YogaContext);

  const filteredP = (
    <div className="outer">
      <div className="yoga-items">
        {filteredPoses.map((pose) => (
          <YogaItem pose={pose} key={pose.id} />
        ))}
      </div>
    </div>
  );
  const poses = (
    <div className="yoga-items">
      {posesBefore.map((pose) => (
        <YogaItem pose={pose} key={pose.id} />
      ))}
    </div>
  );
return poses
};
