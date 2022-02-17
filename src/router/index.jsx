/**
 * @description
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "pages/Home";
import Quiz from "pages/Quiz";
import Lecture from "pages/Lecture";
import Module from "pages/Module";
import test from "pages/Home"
console.log("test",test)
const Router = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/lecture" element={<Lecture />} />
        <Route path="/module" element={<Module />} />
      </Routes>
    </BrowserRouter>
  )
};

export default Router;