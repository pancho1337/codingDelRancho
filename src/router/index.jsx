/**
 * @description
 */

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PageHome from "pages/Home";
import Quiz from "pages/Quiz";
import Lecture from "pages/Lecture";
import ToyProblem from "pages/ToyProblem";
import Project from "pages/Project";
import Module from "pages/Module";
import Header from 'sharedComponents/Header';
import Footer from 'sharedComponents/Footer';
import ErrorPage from 'sharedComponents/ErrorPage';

const Router = function () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<PageHome />} />
        <Route path="/module/quiz/:quizId" element={<Quiz />} />
        <Route path="/module/lecture" element={<Lecture />} />
        <Route path="/module/toy-problem" element={<ToyProblem />} />
        <Route path="/module/project" element={<Project />} />
        <Route path="/module/:moduleId" element={<Module />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
};

export default Router;