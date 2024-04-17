import React, { Dispatch, ReactElement, createContext, useEffect, useState } from "react";
import { ICategories, ILevelPoses, ILevels, IPoses } from "../interfaces";
interface IContext {
  fetchCategories: () => void;
  categoriesFirst: ICategories[];
  posesBefore: IPoses[];
  fetchPoseByCategory: (categoryId: number) => void;
  checkmark: Number;
  setCheckmark: Dispatch<React.SetStateAction<number>>;
  searchVal: string;
  setSearchVal: Dispatch<React.SetStateAction<string>>;
  setFilteredPoses: Dispatch<React.SetStateAction<IPoses[]>>;
  filteredItems: IPoses[];
  filteredPoses: IPoses[];
  hideAllPoses: Boolean;
  setHideAllPoses: Dispatch<React.SetStateAction<boolean>>;
  levelsArray: any[];
  fetchBeginnerPoses: () => void;
  fetchIntermediatePoses: () => void;
}

interface IYogaContextProvider {
  children: ReactElement;
}

export const YogaContext = createContext({} as IContext);

export const YogaContextProvider = ({ children }: IYogaContextProvider) => {
  const [posesBefore, setPoses] = useState<IPoses[]>([]);
  const [categoriesFirst, setCategories] = useState<ICategories[]>([]);
  const [searchVal, setSearchVal] = useState("");
  const [filteredPoses, setFilteredPoses] = useState(posesBefore);
  const [checkmark, setCheckmark] = useState(Number);
  const [hideAllPoses, setHideAllPoses] = useState(Boolean);
  const levelsArray: any[] = [
    { id: 1, level: "beginner" },
    { id: 2, level: "intermediate" },
  ];
  let baseUrl: string = "https://yoga-api-nzy4.onrender.com/v1";
  const fetchCategories = async () => {
    const response = await fetch(`${baseUrl}/categories`);
    const categories: ICategories[] = await response.json();

    setCategories(categories);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  //fetch poses for beginner level

  const fetchBeginnerPoses = async () => {
    const response = await fetch(`${baseUrl}/poses?level=beginner`);
    const poses: ILevels = await response.json();
    const allPoses = poses.poses;
    setPoses(allPoses);
  };
  useEffect(() => {
    fetchBeginnerPoses();
  }, []);

  const fetchIntermediatePoses = async () => {
    const response = await fetch(`${baseUrl}/poses?level=intermediate`);
    const poses: ILevels = await response.json();
    const allPoses = poses.poses;
    setPoses(allPoses);
  };
  useEffect(() => {
    fetchIntermediatePoses();
  }, []);

  const fetchPoseByCategory = async (categoryId: number) => {
    const response = await fetch(`${baseUrl}/categories?id=${categoryId}`);
    const poses: ICategories = await response.json();
    const allPoses = poses.poses;
    setPoses(allPoses);
  };
  useEffect(() => {
    fetchPoseByCategory(0);
  }, []);

  const fetchPoses = async () => {
    const response = await fetch(`${baseUrl}/poses`);
    const poses: IPoses[] = await response.json();

    setPoses(poses);
  };
  useEffect(() => {
    fetchPoses();
  }, []);
  const filteredItems = posesBefore.filter((pose) =>
    pose.english_name.toLowerCase().includes(searchVal.toLowerCase())
  );

  const values: IContext = {
    fetchCategories,
    categoriesFirst,
    posesBefore,
    fetchPoseByCategory,
    checkmark,
    setCheckmark,
    setSearchVal,
    searchVal,
    setFilteredPoses,
    filteredItems,
    filteredPoses,
    hideAllPoses,
    setHideAllPoses,
    levelsArray,
    fetchBeginnerPoses,
    fetchIntermediatePoses,
  };
  return <YogaContext.Provider value={values}>{children}</YogaContext.Provider>;
};
