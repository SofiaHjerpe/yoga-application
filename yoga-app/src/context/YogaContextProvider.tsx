import React, { Dispatch, ReactElement, createContext, useEffect, useState } from "react";
import { ICategories, ILevels, IPoses } from "../interfaces";
interface IContext {
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
  levelsArray: any[];
  fetchBeginnerPoses: () => void;
  fetchIntermediatePoses: () => void;
  checkmarkLvl: string;
  setCheckmarkLvl: Dispatch<React.SetStateAction<string>>;
  mobileNav: { width: number; height: number };
  menuBefore: boolean;
  setMobileMenu: Dispatch<React.SetStateAction<boolean>>;
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
  const [checkmarkLvl, setCheckmarkLvl] = useState("");
   const [menuBefore, setMobileMenu] = useState(false);
  const [mobileNav, setMobileNav] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const fetchCategories = async () => {
    const response = await fetch(`${baseUrl}/categories`);
    const categories: ICategories[] = await response.json();

    setCategories(categories);
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  const levelsArray: any[] = [
    { id: 1, name: "beginner" },
    { id: 2, name: "intermediate" },
  ];
  let baseUrl: string = "https://yoga-api-nzy4.onrender.com/v1";

  const changeWindowSize = () => {
    setMobileNav({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", changeWindowSize, false);
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
    levelsArray,
    fetchBeginnerPoses,
    fetchIntermediatePoses,
    checkmarkLvl,
    setCheckmarkLvl,
    mobileNav,
    menuBefore, 
    setMobileMenu
  };
  return <YogaContext.Provider value={values}>{children}</YogaContext.Provider>;
};
