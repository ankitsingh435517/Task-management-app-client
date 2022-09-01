import React, { useState, useEffect } from "react";
import "./App.css";
import SignUpCard from "./components/sign-up-card/SignUpCard";
import Projects from "./container/Projects";
import SideBar from "./container/side-bar";
import UserContext from "./context/UserContext";

function App() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    function auth() {
      const status = JSON.parse(window.localStorage.getItem("user"));
      if (status === 1) {
        setIsLoggedIn(true);
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
    auth();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {isLoggedIn ? (
            <>
              <SideBar />
              <Projects />
            </>
          ) : (
            <UserContext.Provider value={{ setIsLoggedIn }}>
              <SignUpCard />
            </UserContext.Provider>
          )}
        </>
      )}
    </div>
  );
}

export default App;
