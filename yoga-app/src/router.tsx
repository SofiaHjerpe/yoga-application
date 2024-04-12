import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App } from "./App";
import { About } from "./pages/About";
import { MainPage } from "./pages/MainPage";
import { YogaItemsData } from "./pages/YogaItemsData";
import { Pose } from "./pages/Pose";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        <Route path="/" element={<MainPage />} index />
        <Route path="/about" element={<About />} />
        <Route path="/category/:id" element={<YogaItemsData />}></Route>
        <Route path="/pose/:id" element={<Pose />}></Route>
      </Route>
    </Route>
  )
);
