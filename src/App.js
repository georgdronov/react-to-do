import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";

import { Navbar } from "./components/UI/Navbar/Navbar";
import { AppRouter } from "./components/AppRouter";
import { AuthContext } from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading,
    }}>
      <Router>
        <Navbar />
        <AppRouter isAuth={isAuth} />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;