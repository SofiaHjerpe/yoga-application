import { useContext } from "react";
import { YogaContext } from "../context/YogaContextProvider";


export const YogaItems = () => {
  const {posesBefore} = useContext(YogaContext)
  return (
    posesBefore.map((pose) => <p>{pose.english_name}</p>)
  )
};
