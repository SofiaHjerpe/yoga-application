import React, { FormEventHandler, useState } from "react";

export const Search = () => {
  const [inputValBefore, setInputVal] = useState("");
  const fetchOnSubmit: FormEventHandler<HTMLFormElement>  = () => {

  } 
  return (
    <>
      <div className="search-container">
        <form onSubmit={fetchOnSubmit}>
          <input value={inputValBefore}type="search" placeholder="Search" name="search" onChange={(e) => setInputVal(e.target.value)} className="search" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
