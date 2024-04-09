import React from "react";
import logo from "../assets/test.png";
import { Link } from "react-router-dom";
import { IRoute } from "../interfaces";

interface IHeaderProps {
  links: IRoute[];
}

const Header = ({ links }: IHeaderProps) => {
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
};

export default Header;
