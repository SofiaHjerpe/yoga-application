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
  aboutItemData: any[];
  poseBefore: any;
  setPose: Dispatch<React.SetStateAction<IPoses>>;
  baseUrl: string;
  isLoading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
}

interface IYogaContextProvider {
  children: ReactElement;
}

export const YogaContext = createContext({} as IContext);

export const YogaContextProvider = ({ children }: IYogaContextProvider) => {
  const [posesBefore, setPoses] = useState<IPoses[]>([]);
  const [poseBefore, setPose] = useState<IPoses>(Object);
  const [categoriesFirst, setCategories] = useState<ICategories[]>([]);
  const [searchVal, setSearchVal] = useState("");
  const [filteredPoses, setFilteredPoses] = useState(posesBefore);
  const [checkmark, setCheckmark] = useState(Number);
  const [checkmarkLvl, setCheckmarkLvl] = useState("");
  const [menuBefore, setMobileMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mobileNav, setMobileNav] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  let baseUrl: string = "https://yoga-api-nzy4.onrender.com/v1";

  const levelsArray: any[] = [
    { id: 1, name: "beginner" },
    { id: 2, name: "intermediate" },
  ];

  const aboutInfo: string =
    "On the other hand, we denounce with righteous indignation and dislike men who are so" +
    "beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire," +
    "that they cannot foresee the pain and trouble that are bound to ensue; and equal blame" +
    "belongs to those who fail in their duty through weakness of will, which is the same as" +
    "saying through shrinking from toil and pain. These cases are perfectly simple and easy to" +
    "distinguish. In a free hour, when our power of choice is untrammelled and when nothing" +
    "prevents our being able to do what we like best, every pleasure is to be welcomed and" +
    "every pain avoided. But in certain circumstances and owing to the claims of duty or the" +
    " obligations of business it will frequently occur that pleasures have to be repudiated and" +
    "annoyances accepted. The wise man therefore always holds in these matters to this" +
    "principle of selection: he rejects pleasures to secure other greater pleasures, or else he" +
    "endures pains to avoid worse pains.";

  const aboutItemData: any[] = [{ id: 1, heading: "About", description: aboutInfo }];

  const showLoader = () => {
    setIsLoading(true);
  };

  const hideLoader = () => {
    setIsLoading(false);
  };

  //Get categories on page load
  const fetchCategories = async () => {
    showLoader();
    try {
      const response = await fetch(`${baseUrl}/categories`);
      const categories: ICategories[] = await response.json();

      setCategories(categories);
    } catch {
      (error: any) => console.error("Error:", error);
    } finally {
      hideLoader();
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  //on resize call this function, mobile view of nav
  const changeWindowSize = () => {
    setMobileNav({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", changeWindowSize, false);
  }, []);

  //fetch poses, different categories
  const fetchBeginnerPoses = async () => {
    showLoader();
    try {
      const response = await fetch(`${baseUrl}/poses?level=beginner`);
      const poses: ILevels = await response.json();
      const allPoses = poses.poses;
      setPoses(allPoses);
    } catch {
      (error: any) => console.error("Error:", error);
    } finally {
      hideLoader();
    }
  };
  useEffect(() => {
    fetchBeginnerPoses();
  }, []);

  const fetchIntermediatePoses = async () => {
    showLoader();
    try {
      const response = await fetch(`${baseUrl}/poses?level=intermediate`);
      const poses: ILevels = await response.json();
      const allPoses = poses.poses;
      setPoses(allPoses);
    } catch {
      (error: any) => console.error("Error:", error);
    } finally {
      hideLoader();
    }
  };
  useEffect(() => {
    fetchIntermediatePoses();
  }, []);

  const fetchPoseByCategory = async (categoryId: number) => {
    showLoader();
    try {
      const response = await fetch(`${baseUrl}/categories?id=${categoryId}`);
      const poses: ICategories = await response.json();
      const allPoses = poses.poses;
      setPoses(allPoses);
    } catch {
      (error: any) => console.error("Error:", error);
    } finally {
      hideLoader();
    }
  };
  useEffect(() => {
    fetchPoseByCategory(0);
  }, []);

  // all poses
  const fetchPoses = async () => {
    showLoader();
    try {
      const response = await fetch(`${baseUrl}/poses`);
      const poses: IPoses[] = await response.json();

      setPoses(poses);
    } catch {
      (error: any) => console.error("Error:", error);
    } finally {
      hideLoader;
    }
  };
  useEffect(() => {
    fetchPoses();
  }, []);

  // search
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
    setMobileMenu,
    aboutItemData,
    poseBefore,
    setPose,
    baseUrl,
    isLoading,
    showLoader,
    hideLoader,
  };
  return <YogaContext.Provider value={values}>{children}</YogaContext.Provider>;
};
