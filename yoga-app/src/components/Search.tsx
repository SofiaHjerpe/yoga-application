import React, { ChangeEventHandler, useContext } from "react";
import { YogaContext } from "../context/YogaContextProvider";

export const Search = () => {
  const { searchVal, posesBefore, setSearchVal, filteredItems, setFilteredPoses } =
    useContext(YogaContext);
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchVal(e.target.value);
    setFilteredPoses(filteredItems);
    if (e.target.value === "") {
      setFilteredPoses(posesBefore);
    }
  };

  return (
    <>
      <div className="search-container">
        <form className="form">
          <input
            value={searchVal}
            type="search"
            placeholder="Search for pose"
            name="search"
            onChange={handleInputChange}
            className="search"
          />
        </form>
      </div>
    </>
  );
};
