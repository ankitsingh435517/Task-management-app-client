import React from "react";
import styles from "./sideBar.module.css";

const SideBar = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.menuWrapper}>
        <h3>.taskez</h3>
        <ul className={styles.menu}>
          <li>Overview</li>
          <li>Stats</li>
          <li id={styles.projects}>Projects</li>
          <li>Chat</li>
          <li>Calender</li>
        </ul>
        <ul className={styles.menu}>
          <li>Settings</li>
          <li>Log Out</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
