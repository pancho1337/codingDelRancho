/**
 * @description
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "pages/Home";
import Quiz from "pages/Quiz";
import Lecture from "pages/Lecture";
import Module from "pages/Module";

const Router = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/module" element={<Module />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/lecture" element={<Lecture />} />
        <Route path="/project" element={<Module />} />
      </Routes>
    </BrowserRouter>
  )
};

export default Router;