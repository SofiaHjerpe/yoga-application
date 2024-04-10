import React from "react";
import { IPoses } from "../interfaces";
import { YogaItem } from "./YogaItem";
interface IYogaItemsProps {
  poses: IPoses[];
}
export const YogaItems = ({ poses }: IYogaItemsProps) => {
  return (
    <section className="yoga-items">
      {poses.map((pose) => (
        <YogaItem pose={pose} key={pose.id} />
      ))}
    </section>
  );
};
