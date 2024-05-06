import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import styles from './SearchResults.module.css';

const SearchResults = () => {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=01947fdc028668cbba608f3d08618bef&language=en-US&query=${query}`
        );
        const data = await response.json();
        setSearchResults(data.results);
        console.log('Search results:', data.results); // Log the search results
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchSearchResults();
  }, [query]);

  if (searchResults.length === 0) {
    return <div>No search results found.</div>; 
  }

  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.content}>
        <Navbar />
        <div className={styles.searchResultsContainer}>
          <h2>Search Results for "{query}"</h2>
          <div className={styles.movieGrid}>
            {searchResults.map((movie) => (
              <div key={movie.id} className={styles.movieCard}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className={styles.moviePoster}
                />
                <div className={styles.movieDetails}>
                  <h3>{movie.title}</h3>
                  <p>Rating: {movie.vote_average}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
