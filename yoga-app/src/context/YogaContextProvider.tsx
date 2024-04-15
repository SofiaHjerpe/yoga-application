import React, { Dispatch, ReactElement, createContext, useEffect, useState } from "react";
import { ICategories, IPoses } from "../interfaces";
interface IContext {
  fetchCategories: () => void;
  categoriesFirst: ICategories[];
  posesBefore: IPoses[];
  fetchPoseByCategory: (category_name: string) => void;
  checkmark: Number;
  setCheckmark: Dispatch<React.SetStateAction<number>>;
}

interface IYogaContextProvider {
  children: ReactElement;
}

export const YogaContext = createContext({} as IContext);

export const YogaContextProvider = ({ children }: IYogaContextProvider) => {
  const [posesBefore, setPoses] = useState<IPoses[]>([]);
  const [categoriesFirst, setCategories] = useState<ICategories[]>([]);
  const [filteredPoses, setFilteredPoses] = useState(posesBefore);
  const [checkmark, setCheckmark] = useState(Number);

  let baseUrl: string = "https://yoga-api-nzy4.onrender.com/v1";
  const fetchCategories = async () => {
    const response = await fetch(`${baseUrl}/categories`);
    const categories: ICategories[] = await response.json();

    setCategories(categories);
  };


  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchPoseByCategory = async (category_name: string) => {
    const response = await fetch(`${baseUrl}/categories?name=${category_name}`);
    const poses: ICategories = await response.json();
    const allPoses = poses.poses;
    setPoses(allPoses);
  };
  useEffect(() => {
    fetchPoseByCategory("");
  }, []);

  const values: IContext = {
    fetchCategories,
    categoriesFirst,
    posesBefore,
    fetchPoseByCategory,
    checkmark,
    setCheckmark
  };
  return <YogaContext.Provider value={values}>{children}</YogaContext.Provider>;
};
