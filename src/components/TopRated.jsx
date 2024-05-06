import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './TopRated.module.css';

const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const [topRatedResponse, popularResponse] = await Promise.all([
        fetch(
          'https://api.themoviedb.org/3/movie/top_rated?api_key=01947fdc028668cbba608f3d08618bef&language=en-US'
        ),
        fetch(
          'https://api.themoviedb.org/3/movie/popular?api_key=01947fdc028668cbba608f3d08618bef&language=en-US'
        ),
      ]);

      const [topRatedData, popularData] = await Promise.all([
        topRatedResponse.json(),
        popularResponse.json(),
      ]);

      setTopRatedMovies(topRatedData.results);
      setPopularMovies(popularData.results);
    };

    fetchMovies();
  }, []);

  return (
    <div className={styles.topRatedContainer}>
      <h2 className={styles.sectionHeading}>Top Rated Movies</h2>
      <div className={styles.movieRow}>
        {topRatedMovies.map((movie) => (
          <Link
            key={movie.id}
            to={`/movie/${movie.id}`}
            className={styles.movieLink}
          >
            <div className={styles.movieCard}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className={styles.moviePoster}
              />
              <div className={styles.movieDetails}>
                <h3>{movie.title}</h3>
                <p className={styles.movieRating}>Rating: {movie.vote_average}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <h2 className={styles.sectionHeading}>Most Popular Movies</h2>
      <div className={styles.movieRows}>
        {renderMovieRows(popularMovies, 4)}
      </div>
    </div>
  );
};

const renderMovieRows = (movies, moviesPerRow) => {
  return movies.length > 0 &&
    movies.reduce((rows, movie, index) => {
      if (index % moviesPerRow === 0) {
        rows.push([]);
      }
      rows[rows.length - 1].push(movie);
      return rows;
    }, []).map((row, rowIndex) => (
      <div key={rowIndex} className={styles.movieRow}>
        {row.map((movie) => (
          <Link
            key={movie.id}
            to={`/movie/${movie.id}`}
            className={styles.movieLink}
          >
            <div className={styles.movieCard}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className={styles.moviePoster}
              />
              <div className={styles.movieDetails}>
                <h3>{movie.title}</h3>
                <p className={styles.movieRating}>Rating: {movie.vote_average}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    ));
};

export default TopRated;



