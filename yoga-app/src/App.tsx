import { Outlet } from "react-router-dom";

import "./scss/main.scss";
import Header from "./components/Header";
import { IRoute } from "./interfaces";
const links: IRoute[] = [
  {
    id: 1,
    name: "main page",
    path: "/main",
  },
  {
    id: 2,
    name: "about",
    path: "/about",
  },
];

export function App() {
  return (
    <>
      <Header links={links} />
      <Outlet />
    </>
  );
}
