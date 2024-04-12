import React, { ChangeEventHandler, Dispatch, FormEventHandler, useState } from "react";
import { ICategories, IPoses } from "../interfaces";

interface ISearchProps {
  categories: ICategories[];
  setSearchVal: Dispatch<React.SetStateAction<string>>;
  searchVal: string;
  filteredItems: IPoses[];
  setFilteredPoses: Dispatch<React.SetStateAction<IPoses[]>>;
}
export const Search = ({
  setFilteredPoses,
  filteredItems,
  setSearchVal,
  searchVal,
}: ISearchProps) => {
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
