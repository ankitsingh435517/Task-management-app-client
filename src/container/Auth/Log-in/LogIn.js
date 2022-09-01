import React, { useState, useContext } from "react";
import styles from "../Sign-up/SignUp.module.css";
import UserContext from "../../../context/UserContext";

const initialState = {
  email: "",
  password: "",
};

const LogIn = () => {
  const { setIsLoggedIn } = useContext(UserContext);

  const [passwordType, setPasswordType] = useState("password");
  const [isRemember, setIsRemember] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorObj, setErrorObj] = useState(initialState);
  const [touchedObj, setTouchedObj] = useState({});

  const handleShowPassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    if(isRemember){
      window.localStorage.setItem("user", JSON.stringify(1));
    }
  };

  const validate = (type) => {
    const _errorObj = { ...errorObj };

    switch (type) {
      case "email": {
        if (!touchedObj.email) {
          return;
        }
        if (!email.length) {
          _errorObj.email = "Email cannot be empty";
        } else if (!email.includes("@")) {
          _errorObj.email = "Email is not valid";
        }
        break;
      }
      case "password": {
        if (!touchedObj.password) {
          return;
        }
        if (!password.length) {
          _errorObj.password = "password cannot be empty";
        } else if (password.length < 6) {
          _errorObj.password = "password must contain atleast 6 characters";
        }
        break;
      }
      default: {
      }
    }

    setErrorObj(_errorObj);
  };

  const touched = (type) => {
    const _touchedObj = {
      email: false,
      password: false,
    };

    switch (type) {
      case "email": {
        _touchedObj.email = true;
        break;
      }
      case "password": {
        _touchedObj.password = true;
        break;
      }
      default: {
      }
    }

    setTouchedObj(_touchedObj);
  };

  const sanitizeAndSave = (e, type) => {
    const value = e.target.value;
    const _errorObj = { ...errorObj };
    switch (type) {
      case "email": {
        if (value.length && value.includes("@")) {
          _errorObj.email = "";
        }
        setEmail(value);
        break;
      }
      case "password": {
        if (value.length && value.length >= 6) {
          _errorObj.password = "";
        }
        setPassword(value);
        break;
      }
      default: {
      }
    }

    setErrorObj(_errorObj);
  };
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={email}
            onChange={(e) => sanitizeAndSave(e, "email")}
            placeholder="Email"
            type="email"
            onFocus={() => touched("email")}
            onBlur={() => validate("email")}
            className={`${styles.basicInput} ${
              errorObj.email.length && styles.errorBorder
            }`}
          />
          <span className={styles.errorText}>{errorObj.email}</span>
        </div>
        <div id={styles.inputPassword}>
          <input
            value={password}
            onChange={(e) => sanitizeAndSave(e, "password")}
            placeholder="Password"
            type={passwordType}
            onFocus={() => touched("password")}
            onBlur={() => validate("password")}
            className={`${styles.basicInput} ${
              errorObj.password.length && styles.errorBorder
            }`}
          />
          <span className={styles.errorText}>{errorObj.password}</span>
          <span onClick={handleShowPassword} id={styles.showPassWord}>
            {passwordType === "text" ? "Hide" : "Show"}
          </span>
        </div>
        <div className={styles.submitBtn}>
          <button type="submit">Log in</button>
        </div>
      </form>
      <div className={styles.checkBoxWrap}>
        <input
          value={isRemember}
          onChange={() => setIsRemember(!isRemember)}
          type="checkbox"
          id="rememberme"
        />
        <label id={styles.remembermeText} htmlFor="rememberme">
          Remember Me
        </label>
      </div>
    </div>
  );
};

export default LogIn;
