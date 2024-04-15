import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App } from "./App";
import { About } from "./pages/About";
import { YogaItemsData } from "./pages/YogaItemsData";
import { Pose } from "./pages/Pose";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        <Route path="/" element={<YogaItemsData />} index />
        <Route path="/about" element={<About />} />
        <Route path="/pose/:id" element={<Pose />}></Route>
      </Route>
    </Route>
  )
);
