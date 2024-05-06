import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.profileContainer}>
        <div className={styles.profileIcon}>
          <span className={styles.profileInitials}>A.T</span>
        </div>
        <span className={styles.profileName}>Abdulla Talal</span>
      </div>
      <div className={styles.searchContainer}>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.navButton}>Movies</button>
        <button className={styles.navButton}>Series</button>
      </div>
    </nav>
  );
};

export default Navbar;
