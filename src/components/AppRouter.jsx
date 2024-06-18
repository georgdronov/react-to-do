import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";
import { AuthContext } from "../context";
import { Loader } from "./UI/Loader/Loader";

export const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Routes>
      {isAuth &&
        privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
            exact={route.exact}
          />
        ))}

      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
          exact={route.exact}
        />
      ))}

      {!isAuth && <Route path="*" element={<Navigate to="/login" />} />}
    </Routes>
  );
};
