import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/test.png";
import { Link } from "react-router-dom";
import { IRoute } from "../interfaces";
import { YogaContext } from "../context/YogaContextProvider";

interface IHeaderProps {
  links: IRoute[];
}

const Header = ({ links }: IHeaderProps) => {
  const [menuBefore, setMobileMenu] = useState(false);
  const { mobileNav } = useContext(YogaContext);

  const toggleMenu = () => {
    setMobileMenu(true);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  const mobileMenu = (
    <nav className="mobile">
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div onClick={closeMenu} className="hamburger-menu">
        <div className="line cross1"></div>
        <div className="line cross2"></div>
        <div className="line cross3"></div>
      </div>

      <div className="mobile-links">
        {links.map((link) => (
          <Link key={link.id} className="link" to={link.path}>
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );

  const mobile = (
    <nav className="mobile">
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div onClick={toggleMenu} className="hamburger-menu">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
  if (menuBefore) {
    return mobileMenu;
  }

  if (mobileNav.width >= 768) {
    return (
      <nav className="navigation-links">
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
    return mobile;
  }
};

export default Header;
