import React from 'react';
import styles from './TopBar.module.css';

const TopBar = () => {
  return (
    <div className={`${styles.flexBetween} ${styles.topBarWrapper}`}>
      <div >
        <input className={styles.searchInput} type="text" placeholder='search' />
      </div>
      <div className={`${styles.flexBetween} ${styles.navUser}`}>
        <h6>Hi Saundarya</h6>
        <span id={styles.owner}>S</span>
      </div>
    </div>
  )
}

export default TopBar