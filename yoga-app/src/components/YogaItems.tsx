import React from "react";
import { IPoses } from "../interfaces";
import { YogaItem } from "./YogaItem";
interface IYogaItemsProps {
  poses: IPoses[];
  filteredPoses: IPoses[];
  searchVal: string;
}
export const YogaItems = ({ poses, searchVal, filteredPoses,  }: IYogaItemsProps) => {

  if (searchVal !== "") {
    return (
      <section className="yoga-items">
        {filteredPoses.map((pose) => (
          <YogaItem pose={pose} />
        ))}
      </section>
    );
  }  else {
    return (
      <section className="yoga-items">
        {poses.map((pose) => (
          <YogaItem pose={pose} key={pose.id} />
        ))}
      </section>
    );
  }
      
  
};
