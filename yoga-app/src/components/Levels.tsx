import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

interface ILevelsProps {
  fetchLevels: (lvl: string) => void;
}

export const Levels = ({ fetchLevels }: ILevelsProps) => {
  const { id } = useParams();
  const handleOnClick = (lvl: string) => {
    fetchLevels(lvl);
  };
  return (
    <section>
      <div>
        <Link to={`/category/${id}`} onClick={() => handleOnClick("beginner")}>
          <h4 className="category">Beginner</h4>
        </Link>
      </div>
      <div>
        <Link to={`/category/${id}`} onClick={() => handleOnClick("intermediate")}>
          <h4 className="category">Intermediate</h4>
        </Link>
      </div>
      <div>
        <Link to={`/category/${id}`} onClick={() => handleOnClick("advanced")}>
          <h4 className="category">Advanced</h4>
        </Link>
      </div>
    </section>
  );
};
