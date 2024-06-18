import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { About } from "../pages/About";
import Posts from "../pages/Posts";
import { Error } from "../pages/Error";

export const AppRouter = (props) => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/404" element={<Error />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};
