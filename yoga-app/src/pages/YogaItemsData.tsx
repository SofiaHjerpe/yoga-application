import React, { useContext } from "react";
import { Categories } from "../components/Categories";
import { YogaItems } from "../components/YogaItems";
import { Search } from "../components/Search";
import { Image } from "../components/ImageItem";
import { YogaContext } from "../context/YogaContextProvider";
export const YogaItemsData = () => {
  const { isLoading } = useContext(YogaContext);
  return (
    <div className="main-div animation">
      <div className="categoriesAndImg">
        <Categories />
        <Image className="yoga-image" source="./src/assets/yoga-pose25.png" altAtr="yoga-image" />
      </div>
      <div className="main-container">
        <h1 className="heading">Welcome to this Yoga website!</h1>
        <div className="searchAndImg">
          <Search />
          <Image className="yoga-image" source="./src/assets/meditation2.png" altAtr="meditation" />
        </div>
        <span className={isLoading ? "loader items" : undefined}></span>

        <YogaItems />
      </div>
    </div>
  );
};
