import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TopRated from './components/TopRated';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.content}>
        <Sidebar />
        <TopRated />
      </div>
    </div>
  );
};

export default App;
