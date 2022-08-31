import React, { useState } from "react";
import LogIn from "../../container/Auth/Log-in/LogIn";
import SignUp from "../../container/Auth/Sign-up/SignUp";
import styles from "./SignUpCard.module.css";

const SignUpCard = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <button
          className={`${showLogin && styles.active} ${styles.menuBtn}`}
          onClick={() => setShowLogin(true)}
        >
          Log In
        </button>
        <button
          className={`${!showLogin && styles.active} ${styles.menuBtn}`}
          onClick={() => setShowLogin(false)}
        >
          Sign up
        </button>
        {showLogin ? <LogIn /> : <SignUp />}
      </div>
    </div>
  );
};

export default SignUpCard;
