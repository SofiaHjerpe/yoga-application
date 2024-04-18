import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/test.png";
import { Link } from "react-router-dom";
import { IRoute } from "../interfaces";
import { YogaContext } from "../context/YogaContextProvider";

interface IHeaderProps {
  links: IRoute[];
}

const Header = ({ links }: IHeaderProps) => {
  const { mobileNav } = useContext(YogaContext);

  if (mobileNav.width >= 768) {
    return (
      <nav>
        <img src={logo} alt="logo" className="logo" />
        <div className="links">
          {links.map((link) => (
            <Link key={link.id} className="link" to={link.path}>
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    );
  } else if (mobileNav.width < 768) {
    return (
      <nav className="mobile">
        <div>
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="hamburger-menu">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    );
  }
};

export default Header;
