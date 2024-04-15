import React, { ChangeEventHandler, Dispatch, FormEventHandler, useState } from "react";
import { ICategories, IPoses } from "../interfaces";

export const Search = () => {
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    // setSearchVal(e.target.value);
    // setFilteredPoses(filteredItems);
  };
  return (
    <>
      <div className="search-container">
        <form>
          <input
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
