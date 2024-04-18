import React, { ChangeEventHandler, useContext, } from "react";
import { YogaContext } from "../context/YogaContextProvider";

export const Search = () => {
  const { searchVal, setSearchVal, filteredItems, setFilteredPoses } = useContext(YogaContext);
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchVal(e.target.value);
    setFilteredPoses(filteredItems);
  };
  return (
    <>
      <div className="search-container">
        <form>
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
