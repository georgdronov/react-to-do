import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route, Redirect, Navigate } from "react-router-dom";
import { About } from "./pages/About";
import  Posts  from "./pages/Posts";
import { Navbar } from "./components/UI/Navbar/Navbar";
import { Error } from "./pages/Error";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
