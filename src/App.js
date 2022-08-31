import React, { useState } from "react";
import "./App.css";
import SignUpCard from "./components/sign-up-card/SignUpCard";
import Projects from "./container/Projects";
import SideBar from "./container/side-bar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <SideBar />
          <Projects />
        </>
      ) : (
        <SignUpCard />
      )}
    </div>
  );
}

export default App;
