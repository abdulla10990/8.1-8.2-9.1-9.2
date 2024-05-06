import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=01947fdc028668cbba608f3d08618bef&language=en-US`
        );
        const data = await response.json();
        setMovie(data);
        console.log('Movie data:', data); 
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.content}>
        <Navbar />
        <div className={styles.movieDetailsContainer}>
          <div className={styles.moviePosterContainer}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className={styles.moviePoster}
            />
          </div>
          <div className={styles.movieInfo}>
            <h2>{movie.title}</h2>
            <p>Rating: {movie.vote_average}</p>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
