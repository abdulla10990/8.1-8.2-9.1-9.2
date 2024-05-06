import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarButtonContainer}>
        <Link to="/" className={styles.sidebarButton}>
          <i className={`fas fa-home ${styles.buttonIcon}`}></i>
          <span className={styles.buttonLabel}>Home</span>
        </Link>
        <Link to="/download" className={styles.sidebarButton}>
          <i className={`fas fa-download ${styles.buttonIcon}`}></i>
          <span className={styles.buttonLabel}>Download</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
